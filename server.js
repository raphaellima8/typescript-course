"use strict";
var http = require('http');
var api_1 = require('./server/api/api');
var API = api_1["default"];
var server = http.createServer(API);
server.listen(3000, function () {
    console.log('Express está funcionando na porta 3000');
});
exports.__esModule = true;
exports["default"] = server;
