import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

const api = express();
const routes = require('./routes/routes')();

api.use(morgan('dev'));
api.use(bodyParser.urlencoded( { extended: true } ));
api.use(bodyParser.json());

routes(api);

export default api; 