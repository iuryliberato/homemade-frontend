const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', { target: 'https://main--elegant-rolypoly-9693b2.netlify.app' }))
}