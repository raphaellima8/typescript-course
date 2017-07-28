"use strict";
var HttpStatus = require('http-status');
function authFail(req, res) {
    res.sendStatus(HttpStatus.UNAUTHORIZED);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = authFail;
