import { app, request, expect } from './config/helpers';

describe('Testes de Integração', () => {

  describe('GET /', () => {
    it('Deve retornar a mensagem Hello, world!', done => {
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
      const nome = 'TypeScript Course';
      request(app)
        .get(`/ola/${nome}`)
        .end((error, res) => {
          expect(res.status).to.equal(200);
          expect(res.text).to.be.eql('Hello, TypeScript Course');
          done(error);
        })
    })
  })

  describe('GET /api/users/all', () => {
    it('Deve retornar um Json com todos os Usuários', done => {
      request(app)
        .get('/api/users/all')
        .end((error, res) => {
          expect(res.status).to.equal(200);
        })
    });
  });
  describe('GET /api/users/:id', () => {
    it('Deve retornar um Json com apenas um Usuário', done => {
      request(app)
        .get(`/api/users/${1}`)
        .end((error, res) => {
          expect(res.status).to.equal(200);
        })
    });
  });
  describe('POST /api/users/new', () => {
    it('Deve criar um novo Usuário', done => {
      const user = {
        nome: 'Teste'
      }
      request(app)
        .post('/api/users/new')
        .send(user)
        .end((error, res) => {
          expect(res.status).to.equal(200);
        })
    });
  });
  describe('PUT /api/users/:id/edit', () => {
    it('Deve atualizar um Usuário', done => {
      const user = {
        nome: 'TesteUpdate'
      }
      request(app)
        .put(`/api/users/${1}/edit`)
        .send(user)
        .end((error, res) => {
          expect(res.status).to.equal(200);
        })
    });
  });

  describe('DELETE /api/users/:id', () => {
    it('Deve deletar um Usuário', done => {
      request(app)
        .put(`/api/users/${1}`)
        .end((error, res) => {
          expect(res.status).to.equal(200);
        })
    });
  });
});
