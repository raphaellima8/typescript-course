"use strict";
var HTTPStatus = require('http-status');
function onError(res, message, err) {
    console.log("Error: " + err);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message);
}
exports.onError = onError;
