"use strict";
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var api = express();
api.use(morgan('dev'));
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());
api.get('/', function (req, res) {
    res.send('Hello, wolrd!');
});
api.get('/ola/:nome', function (req, res) {
    var nome = req.params.nome;
    res.send("Ol\u00E1, " + nome);
});
exports.__esModule = true;
exports["default"] = api;
