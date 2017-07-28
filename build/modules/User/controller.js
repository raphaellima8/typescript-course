"use strict";
var _ = require('lodash');
var errorHandler_1 = require('../../api/responses/errorHandler');
var successHandler_1 = require('../../api/responses/successHandler');
var dbErrorHandler_1 = require('../../config/dbErrorHandler');
var service_1 = require('./service');
var UserController = (function () {
    function UserController() {
        this.UserService = new service_1.default();
    }
    UserController.prototype.getAll = function (req, res) {
        this.UserService
            .getAll()
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, "Erro ao buscar todos os usu\u00E1rios"));
    };
    UserController.prototype.createUser = function (req, res) {
        this.UserService
            .create(req.body)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(dbErrorHandler_1.dbErrorHandler, res))
            .catch(_.partial(errorHandler_1.onError, res, "Erro ao inserir novo usu\u00E1rio"));
    };
    UserController.prototype.getById = function (req, res) {
        var userId = parseInt(req.params.id);
        this.UserService.getById(userId)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, "Usu\u00E1rio n\u00E3o encontrado"));
    };
    UserController.prototype.updateUser = function (req, res) {
        var userId = parseInt(req.params.id);
        var props = req.body;
        this.UserService.update(userId, props)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, "Falha ao atualizar usu\u00E1rio"));
    };
    UserController.prototype.deleteUser = function (req, res) {
        var userId = parseInt(req.params.id);
        this.UserService.delete(userId)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, "Erro ao excluir usu\u00E1rio"));
    };
    return UserController;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserController;
