const chromium = require('chrome-aws-lambda')
const path = require('path')
const {S3} = require('aws-sdk')

exports.handler = (event, context, callback) => {
  if ('Records' in event) {
    return handleS3(event, context, callback)
  }
  return handleHttp(event, context, callback)
}

const handleHttp = event => {
  const html = Buffer.from(event.body, 'base64').toString()

  return screenshot(html)
    .then(file => ({
      statusCode     : 201,
      body           : file,
      headers        : {
        'content-type'       : 'image/png',
        'content-disposition': 'attachment; filename=converted.png'
      },
      isBase64Encoded: true
    }))
    .catch(e => ({statusCode: 500, body: e.message}))
}
const handleS3 = event => {
  return Promise.all(
    event.Records.map(async r => {
      const {bucket, object} = r.s3
      const {key, size} = object

      if (size > 0) {
        const response = await s3
          .getObject({
            Bucket: bucket.name,
            Key   : key,
          })
          .promise()
        const file = await screenshot(response.Body)

        if (file) {
          const {dir, name} = path.parse(key)
          const putKey = [dir, `${name}.png`].join('/')

          return s3
            .putObject({
              Bucket: bucket.name,
              Key   : putKey,
            })
            .promise()
        }
      }
      console.info(`skip: ${key} has size 0`)
    })
  )
}
const screenshot = async (html) => {
  let browser

  try {
    const {args, defaultViewport, executablePath, headless} = chromium
    browser = await chromium.puppeteer.launch({
      args,
      defaultViewport,
      headless,
      executablePath: await executablePath,
    })

    const page = await browser.newPage()
    await page.setContent(html)
    const file = await page.screenshot({encoding: 'base64'})

    return file
  } finally {
    if (browser) {
      await browser.close()
    }
  }
}

const s3 = new S3({region: 'ap-northeast-2'})
