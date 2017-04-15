import * as http from 'http';
import api from './server/api/api';

const API = api;
const server = http.createServer(API);

server.listen(3000, function() {
    console.log('Express está funcionando na porta 3000');
});

export default server;