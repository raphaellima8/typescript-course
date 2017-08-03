"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
var jwt = require("jwt-simple");
var bcrypt = require("bcrypt");
var config = require('../../config/env/config')();
var Handlers = (function () {
    function Handlers() {
    }
    Handlers.prototype.onSuccess = function (res, data) {
        return res.status(HTTPStatus.OK).json({ payload: data });
    };
    Handlers.prototype.onError = function (res, message, err) {
        console.log("Error: " + err);
        return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message);
    };
    Handlers.prototype.authSuccess = function (res, credentials, data) {
        var isMatch = bcrypt.compareSync(credentials.password, data.password);
        if (isMatch) {
            var payload = { id: data.id };
            return res.json({
                token: jwt.encode(payload, config.secret)
            });
        }
        else {
            return res.sendStatus(HTTPStatus.UNAUTHORIZED);
        }
    };
    Handlers.prototype.authFail = function (req, res) {
        return res.sendStatus(HTTPStatus.UNAUTHORIZED);
    };
    Handlers.prototype.dbErrorHandler = function (res, err) {
        console.log("Um erro aconteceu: " + err);
        return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
            code: 'ERR-01',
            message: 'Erro ao criar usuário'
        });
    };
    Handlers.prototype.errorHandlerApi = function (err, req, res, next) {
        console.error("API error handler foi executada: " + err);
        return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
            errorCode: 'ERR-001',
            message: 'Erro Interno do Servidor'
        });
    };
    return Handlers;
}());
exports.default = new Handlers();
