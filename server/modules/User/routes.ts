import { Request, Response } from 'express';
import UserController from './controller';

class UserRoutes {

  constructor(){}

  index(req: Request, res: Response){
    return UserController.getAll(req, res);
  }

  create(req: Request, res: Response){
    return UserController.createUser(req, res);
  }

  findOne(req: Request, res: Response){
    return UserController.getById(req, res);
  }

  update(req: Request, res: Response){
    return UserController.updateUser(req, res);
  }

  destroy(req: Request, res: Response){
    return UserController.deleteUser(req, res);
  }

}

export default new UserRoutes();
