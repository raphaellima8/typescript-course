import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import * as HTTPStatus from 'http-status';
import * as jwt from 'jwt-simple';
import * as bcrypt from 'bcrypt';
const config = require('../../config/env/config')();


class Handlers {

  constructor(){}

  onSuccess(res: Response, data: any){
      return res.status(HTTPStatus.OK).json({ payload: data });
  }

  onError(res: Response, message: string, err: any) {
    console.log(`Error: ${err}`);
    return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message);
  }

  authSuccess(res: Response, credentials: any, data: any) {
    const isMatch = bcrypt.compareSync(credentials.password, data.password);
    if(isMatch) {
      const payload = { id: data.id };
      return res.json({
                token: jwt.encode(payload, config.secret)
             });
    } else {
      return res.sendStatus(HTTPStatus.UNAUTHORIZED);
    }
  }

  authFail(req: Request, res: Response) {
    return res.sendStatus(HTTPStatus.UNAUTHORIZED);
  }

  dbErrorHandler(res: Response, err: any){
    console.log(`Um erro aconteceu: ${err}`);
    return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
      code: 'ERR-01',
      message: 'Erro ao criar usuário'
    });
  }

  errorHandlerApi(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction){
    console.error(`API error handler foi executada: ${err}`);
    return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
      errorCode: 'ERR-001',
      message: 'Erro Interno do Servidor'
    });
  }
}

export default new Handlers();
