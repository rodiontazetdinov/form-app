const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require('cors');

const PORT = 8000;
const HOST = 'localhost'
const app = express();
// здесь мы указываем адрес нашего сервера
const API_SERVICE_URL = "http://34.92.175.180:8000/download";;
// прописываем следующую строку, если используется незашифрованное соединение
// это серьезная брешь в безопасности, следует использовать только на этапе
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

// здесь мы указываем, какие заголовки нам нужно разрешить для использования app.use(cors({ exposedHeaders: '*' }));
app.use("/", createProxyMiddleware({ target: API_SERVICE_URL, changeOrigin: true, ws: true, logLevel: "debug" }));
app.listen(PORT, HOST, () => { console.log(`Starting Proxy Server at ${HOST}:${PORT}`); });