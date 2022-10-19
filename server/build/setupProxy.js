"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_proxy_middleware_1 = require("http-proxy-middleware");
module.exports = function (app) {
    app.use((0, http_proxy_middleware_1.createProxyMiddleware)("/api/devices", {
        target: "http://localhost:8080",
        secure: false,
        changeOrigin: true
    }));
    app.use((0, http_proxy_middleware_1.createProxyMiddleware)("/api/devicedata", {
        target: "http://localhost:8080",
        secure: false,
        changeOrigin: true
    }));
};
