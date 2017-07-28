"use strict";
var _ = require('lodash');
var service_1 = require('../User/service');
var authSuccess_1 = require('../../api/responses/authSuccess');
var authFail_1 = require('../../api/responses/authFail');
var UserService = new service_1.default();
var TokenRoutes = (function () {
    function TokenRoutes() {
    }
    TokenRoutes.prototype.auth = function (req, res) {
        var credentials = {
            email: req.body.email,
            password: req.body.password
        };
        if (credentials.hasOwnProperty('email') && credentials.hasOwnProperty('password')) {
            UserService
                .getByEmail(credentials.email)
                .then(_.partial(authSuccess_1.default, res, credentials))
                .catch(_.partial(authFail_1.default, req, res));
        }
    };
    return TokenRoutes;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TokenRoutes;
