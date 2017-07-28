"use strict";
var jwt = require('jwt-simple');
var HttpStatus = require('http-status');
var bcrypt = require('bcrypt');
var config = require('../../config/env/config')();
function authSuccess(res, credentials, data) {
    var isMatch = bcrypt.compareSync(credentials.password, data.password);
    if (isMatch) {
        var payload = { id: data.id };
        res.json({
            token: jwt.encode(payload, config.secret)
        });
    }
    else {
        res.sendStatus(HttpStatus.UNAUTHORIZED);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = authSuccess;
