import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/User/routes';
import TokenRoutes from '../../modules/auth/auth';

class Routes {

  private tokenRoute;

  constructor() {
    this.tokenRoute = TokenRoutes;
  }

  initRoutes(app: Application, auth: any): void {
    app.route('/api/users/all').all(auth.config().authenticate()).get(UserRoutes.index);
    app.route('/api/users/create').all(auth.config().authenticate()).post(UserRoutes.create);
    app.route('/api/users/:id').all(auth.config().authenticate()).get(UserRoutes.findOne);
    app.route('/api/users/:id/update').all(auth.config().authenticate()).put(UserRoutes.update);
    app.route('/api/users/:id/destroy').all(auth.config().authenticate()).delete(UserRoutes.destroy);
    app.route('/token').post(this.tokenRoute.auth);
  }
}

export default new Routes();
