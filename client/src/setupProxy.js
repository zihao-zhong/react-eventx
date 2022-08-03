// const { createProxyMiddleware } = require('http-proxy-middleware');
import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
  app.use(
    '/v2',
    createProxyMiddleware({
      target: 'https://api.coincap.io',
      secure: true,
      changeOrigin: true,
      onProxyReq: function (proxyReq, req) {
        console.log(req.path);
      },
    }),
  );

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://127.0.0.1:3333/',
      changeOrigin: true,
      pathRewrite: {
        // '^/api': '/',
      },
      onProxyReq: function (proxyReq, req) {
        console.log(req.path);
      },
    }),
  );
}
