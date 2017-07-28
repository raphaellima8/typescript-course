"use strict";
function errorHandlerApi(err, req, res, next) {
    console.error("API error handler foi executada: " + err);
    res.status(500).json({
        errorCode: 'ERR-001',
        message: 'Erro Interno do Servidor'
    });
}
exports.errorHandlerApi = errorHandlerApi;
