"use strict";
var helpers_1 = require("./config/helpers");
var service_1 = require("../../server/modules/User/service");
describe('Testes Unitários do Service', function () {
    var email;
    var _id;
    describe('Método Create', function () {
        it('Deve criar um novo Usuário', function () {
            var novoUsuario = {
                id: 1,
                name: 'Novo Usuario',
                email: 'novousuario@email.com',
                password: '1234'
            };
            var user = new service_1.default();
            return user.create(novoUsuario)
                .then(function (data) {
                helpers_1.expect(data.dataValues).to.have.all.keys(['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']);
                _id = data.dataValues.id;
            });
        });
    });
    describe('Método Update', function () {
        it('Deve atualizar um Usuário', function () {
            var usuarioAtualizado = {
                name: 'Nome Atualizado',
                email: 'atualizado@email.com'
            };
            email = usuarioAtualizado.email;
            var user = new service_1.default();
            return user.update(1, usuarioAtualizado).then(function (data) {
                helpers_1.expect(data[0]).to.be.equal(1);
            });
        });
    });
    describe('Método GET Users', function () {
        it('Deve retornar uma lista com todos os Usuários', function () {
            var user = new service_1.default();
            return user.getAll().then(function (data) {
                helpers_1.expect(data).to.be.an('array');
                helpers_1.expect(data[0]).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('Método getById', function () {
        it('Retornar um usuário de acordo com o ID passado', function () {
            var user = new service_1.default();
            return user.getById(_id).then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('Método getByEmail', function () {
        it('Retornar um usuário de acordo com o EMAIL passado', function () {
            var user = new service_1.default();
            return user.getByEmail(email).then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('Método Delete', function () {
        it('Deve deletar um Usuário', function () {
            var user = new service_1.default();
            return user.delete(1).then(function (data) {
                helpers_1.expect(data).to.be.equal(1);
            });
        });
    });
});
