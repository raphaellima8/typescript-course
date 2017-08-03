import { testDouble, expect } from './config/helpers';
import User from '../../server/modules/User/service';
const model = require('../../server/models');

describe('Testes Unitários do Service', () => {

  let email;
  let _id;

  const defaultUser = {
    id: 1,
    name: 'Default User',
    email: 'defaultuser@email.com',
    password: '1234'
  }

  beforeEach((done) => {
    model.User.destroy({
      where: {}
    })
    .then(() => {
      model.User.create(defaultUser).then(() => {
        console.log(`Default User created`)
        done();
      });
    })
  });

  describe('Método Create', () => {
    it('Deve criar um novo Usuário', () => {
      return User.create({
          id: 2,
          name: 'Novo Usuario',
          email: 'novousuario@email.com',
          password: '1234'
      })
      .then(data => {
        expect(data.dataValues).to.have.all.keys(
          ['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']
        )
      });
    });
  })

  describe('Método Update', () => {
    it('Deve atualizar um Usuário', () => {
      const usuarioAtualizado = {
        name: 'Nome Atualizado',
        email: 'atualizado@email.com'
      };
      return User
              .update(defaultUser.id, usuarioAtualizado)
              .then(data => {
                expect(data[0]).to.be.equal(1);
              })
            });
    });

  describe('Método GET Users', () => {
    it('Deve retornar uma lista com todos os Usuários', () => {
      return User.getAll().then(data => {
        expect(data).to.be.an('array');
      })
    })
  });

  describe('Método getById', () => {
    it('Retornar um usuário de acordo com o ID passado', () => {
      //Deve implementar a lógica do teste.
        return User.getById(defaultUser.id).then(data => {
            expect(data).to.have.all.keys(
              ['email', 'id', 'name', 'password']
            )
        })
    })
  })

  describe('Método getByEmail', () => {
    it('Retornar um usuário de acordo com o EMAIL passado', () => {
      //Deve implementar a lógica do teste.
        return User.getByEmail(defaultUser.email).then(data => {
          expect(data).to.have.all.keys(
            ['email', 'id', 'name', 'password']
          )
        })
    })
  })

  describe('Método Delete', () => {
    it('Deve deletar um Usuário', () => {
      return User.delete(defaultUser.id).then(data => {
        console.log(data)
        // expect(data).to.be.equal(1);
      })
    });
  });

});
