"use strict";
var HTTPStatus = require('http-status');
function onSuccess(res, data) {
    res.status(HTTPStatus.OK).json({ payload: data });
}
exports.onSuccess = onSuccess;
