import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

const api = express();

api.use(morgan('dev'));
api.use(bodyParser.urlencoded( { extended: true } ));
api.use(bodyParser.json());

api.get('/', function(req, res) {
    res.send('Hello, wolrd!');
});

api.get('/ola/:nome', function(req, res) {
    const nome = req.params.nome;
    res.send(`Olá, ${nome}`);
});

export default api;