"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var routes_1 = require("./routes/routes");
var handlers_1 = require("./responses/handlers");
var auth_1 = require("../auth");
var Api = (function () {
    function Api() {
        this.express = express();
        this.middleware();
    }
    Api.prototype.middleware = function () {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(handlers_1.default.errorHandlerApi);
        this.express.use(auth_1.default.config().initialize());
        this.router(this.express, auth_1.default);
    };
    Api.prototype.router = function (app, auth) {
        routes_1.default.initRoutes(app, auth);
    };
    return Api;
}());
exports.default = new Api().express;
