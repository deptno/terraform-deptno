const path = require('path')
const slsw = require('serverless-webpack')

module.exports = {
  mode     : slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry    : slsw.lib.entries,
  externals: ['aws-sdk', 'chrome-aws-lambda', 'puppeteer-core'],
  resolve  : {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  output   : {
    libraryTarget: 'commonjs',
    path         : path.join(__dirname, '.webpack'),
    filename     : '[name].js',
  },
  target   : 'node',
  module   : {
    rules: [
      {
        test   : /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader : 'babel-loader',
      }
    ],
  },
  optimization: {
    minimize: false
  }
}
