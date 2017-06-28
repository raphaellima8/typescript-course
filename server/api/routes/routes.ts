import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/User/routes';
import TokenRoutes from '../../modules/auth/auth';

class Routes {

  private router: UserRoutes;
  private tokenRoute;
  private auth;

  constructor(app: Application, auth: any) {
    this.router = new UserRoutes();
    this.tokenRoute = new TokenRoutes();
    this.auth = auth;
    this.getRoutes(app);
  }

  getRoutes(app: Application): void {
    app.route('/api/users/all').all(this.auth.authenticate()).get(this.router.index);
    app.route('/api/users/create').all(this.auth.authenticate()).post(this.router.create);
    app.route('/api/users/:id').all(this.auth.authenticate()).get(this.router.findOne);
    app.route('/api/users/:id/update').all(this.auth.authenticate()).put(this.router.update);
    app.route('/api/users/:id/destroy').all(this.auth.authenticate()).delete(this.router.destroy);
    app.route('/token').post(this.tokenRoute.auth);
  }
}

export default Routes;
