const next = require('next')
const serverless = require('serverless-http')
const express = require('express')()

const app = next({dev: false})
const handle = app.getRequestHandler()

app.prepare().then(() => express.get('*', (req, res) => handle(req, res)))

exports.handler = serverless(express)
