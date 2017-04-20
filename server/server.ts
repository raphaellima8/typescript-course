import * as http from 'http';
import Api from './api/api';

const config = require('./config/env/config')();

const server = http.createServer(Api);

server.listen(config.serverPort);
server.on('listening', () => console.log(`Servidor está rodando na porta ${config.serverPort}`));
server.on('error', (error: NodeJS.ErrnoException) => console.log(`Ocorreu um erro: ${error}`));
