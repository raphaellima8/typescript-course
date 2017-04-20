import { app, request, expect } from './config/helpers';

describe('## User Tests', () => {
  describe('GET /', () => {
    it('Deve retornar a mensagem Hello, World', done => {
      request(app)
        .get('/')
        .end((error, res) => {
          expect(res.status).to.equal(200);
          expect(res.text).to.be.eql('Hello, world!');
          done(error);
        });
    });
  });

  describe('GET /ola/:nome', () => {
    it('Deve retornar a mensagem Hello, TypeScript Course', done => {
      const nome = 'TypeScript Course'
      request(app)
        .get(`/ola/${nome}`)
        .end((error, res) => {
          expect(res.status).to.equal(200);
          expect(res.text).to.be.eql('Hello, TypeScript Course');
          done(error);
        });
    })
  })
});
