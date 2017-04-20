"use strict";
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var routes_1 = require("./routes/routes");
var errorHandlerApi_1 = require("./errorHandlerApi");
var Api = (function () {
    function Api() {
        this.express = express();
        this.middleware();
    }
    Api.prototype.middleware = function () {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(errorHandlerApi_1.errorHandlerApi);
        this.router(this.express);
    };
    Api.prototype.router = function (app) {
        new routes_1.default(app);
    };
    return Api;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Api().express;
