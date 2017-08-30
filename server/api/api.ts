import * as express from 'express';
import { Application } from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import Routes from './routes/routes';
import Handlers from './responses/handlers';
import Auth from '../auth';

class Api {

  public express: Application;

  constructor() {
    this.express = express();
    this.middleware();
  }

  middleware(): void {
    this.express.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      next();
    });
    this.express.use(morgan('dev'));
    this.express.use(bodyParser.urlencoded( { extended: true } ));
    this.express.use(bodyParser.json());
    this.express.use(Handlers.errorHandlerApi);
    this.express.use(Auth.config().initialize());
    this.router(this.express, Auth);
  }

  private router(app: Application, auth: any): void {
    Routes.initRoutes(app, auth);
  }
}

export default new Api().express;
