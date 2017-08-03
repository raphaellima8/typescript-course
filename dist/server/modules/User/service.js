"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interface_1 = require("./interface");
var model = require('../../models');
var User = (function () {
    function User() {
    }
    User.prototype.create = function (user) {
        return model.User.create(user);
    };
    User.prototype.getAll = function () {
        return model.User.findAll({
            order: ['name']
        })
            .then(interface_1.createUsers);
    };
    User.prototype.getById = function (id) {
        return model.User.findOne({
            where: { id: id }
        })
            .then(interface_1.createUserById);
    };
    User.prototype.getByEmail = function (email) {
        return model.User.findOne({
            where: { email: email }
        })
            .then(interface_1.createUserByEmail);
    };
    User.prototype.update = function (id, user) {
        return model.User.update(user, {
            where: { id: id },
            fields: ['name', 'email', 'password'],
            hooks: true,
            individualHooks: true
        });
    };
    User.prototype.delete = function (id) {
        return model.User.destroy({
            where: { id: id }
        });
    };
    return User;
}());
exports.default = new User();
