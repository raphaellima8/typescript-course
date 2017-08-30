"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var service_1 = require("../User/service");
var handlers_1 = require("../../api/responses/handlers");
var TokenRoutes = (function () {
    function TokenRoutes() {
    }
    TokenRoutes.prototype.auth = function (req, res) {
        var credentials = {
            email: req.body.email,
            password: req.body.password
        };
        if (credentials.hasOwnProperty('email') && credentials.hasOwnProperty('password')) {
            service_1.default
                .getByEmail(credentials.email)
                .then(_.partial(handlers_1.default.authSuccess, res, credentials))
                .catch(_.partial(handlers_1.default.authFail, req, res));
        }
    };
    return TokenRoutes;
}());
exports.default = new TokenRoutes();
