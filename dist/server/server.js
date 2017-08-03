"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var api_1 = require("./api/api");
var models = require('./models');
var config = require('./config/env/config')();
var server = http.createServer(api_1.default);
models.sequelize.sync().then(function () {
    server.listen(config.serverPort);
    server.on('listening', function () { return console.log("Servidor est\u00E1 rodando na porta " + config.serverPort); });
    server.on('error', function (error) { return console.log("Ocorreu um erro: " + error); });
});
