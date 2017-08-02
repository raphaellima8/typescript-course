import { Request, Response } from 'express';
import * as _ from 'lodash';
import Handlers from '../../api/responses/handlers';
import User from './service';

class UserController {

  constructor(){}

  getAll(req: Request, res: Response){
    User
        .getAll()
        .then(_.partial(Handlers.onSuccess, res))
        .catch(_.partial(Handlers.onError, res, `Erro ao buscar todos os usuários`))
  }

  createUser(req: Request, res: Response){
    User
        .create(req.body)
        .then(_.partial(Handlers.onSuccess, res))
        .catch(_.partial(Handlers.dbErrorHandler, res))
        .catch(_.partial(Handlers.onError, res, `Erro ao inserir novo usuário`));
  }

  getById(req: Request, res: Response){
    const userId = parseInt(req.params.id);
    User.getById(userId)
      .then(_.partial(Handlers.onSuccess, res))
      .catch(_.partial(Handlers.onError, res, `Usuário não encontrado`))
  }

  updateUser(req: Request, res: Response){
    const userId = parseInt(req.params.id);
    const props = req.body;
    User.update(userId, props)
      .then(_.partial(Handlers.onSuccess, res))
      .catch(_.partial(Handlers.onError, res, `Falha ao atualizar usuário`))
  }

  deleteUser(req: Request, res: Response){
    const userId = parseInt(req.params.id);
    User.delete(userId)
      .then(_.partial(Handlers.onSuccess, res))
      .catch(_.partial(Handlers.onError, res, `Erro ao excluir usuário`))
  }
}

export default new UserController();
