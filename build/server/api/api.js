"use strict";
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var routes_1 = require("./routes/routes");
var errorHandlerApi_1 = require("./errorHandlerApi");
var auth_1 = require("../auth");
var Api = (function () {
    function Api() {
        this.express = express();
        this.auth = auth_1.default();
        this.middleware();
    }
    Api.prototype.middleware = function () {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(errorHandlerApi_1.errorHandlerApi);
        this.express.use(this.auth.initialize());
        this.router(this.express, this.auth);
    };
    Api.prototype.router = function (app, auth) {
        new routes_1.default(app, auth);
    };
    return Api;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Api().express;
