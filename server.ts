import * as http from 'http';
import api from './server/api/api';

const config = require('./server/config/env/config')();

const API = api;
const server = http.createServer(API);

server.listen(config.server_port, function() {
    console.log('Express está funcionando na porta 3000');
});

export default server;