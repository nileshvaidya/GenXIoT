import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

module.exports = function(app: { use: (arg0: any) => void; }) {
  app.use(
    createProxyMiddleware("/api/devices", {
      target: "http://localhost:8080",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware("/api/devicedata", {
      target: "http://localhost:8080",
      secure: false,
      changeOrigin: true
    })
  );
};