import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/User/routes';
import TokenRoutes from '../../modules/auth/auth';

class Routes {

  private tokenRoute;

  constructor() {
    this.tokenRoute = TokenRoutes;
  }

  initRoutes(app: Application, auth: any): void {
    app.route('/api/users/all').all(auth.authenticate()).get(UserRoutes.index);
    app.route('/api/users/create').all(auth.authenticate()).post(UserRoutes.create);
    app.route('/api/users/:id').all(auth.authenticate()).get(UserRoutes.findOne);
    app.route('/api/users/:id/update').all(auth.authenticate()).put(UserRoutes.update);
    app.route('/api/users/:id/destroy').all(auth.authenticate()).delete(UserRoutes.destroy);
    app.route('/token').post(this.tokenRoute.auth);
  }
}

export default new Routes();
