"use strict";
var helpers_1 = require("./config/helpers");
describe('## User Tests', function () {
    describe('GET /', function () {
        it('Deve retornar a mensagem Hello, World', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
                helpers_1.expect(res.text).to.be.eql('Hello, world!');
                done(error);
            });
        });
    });
    describe('GET /ola/:nome', function () {
        it('Deve retornar a mensagem Hello, TypeScript Course', function (done) {
            var nome = 'TypeScript Course';
            helpers_1.request(helpers_1.app)
                .get("/ola/" + nome)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
                helpers_1.expect(res.text).to.be.eql('Hello, TypeScript Course');
                done(error);
            });
        });
    });
});
