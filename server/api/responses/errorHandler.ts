import { Response } from 'express';
import * as HTTPStatus from 'http-status';

export function onError(res: Response, message: string, err: any) {
  console.log(`Error: ${err}`);
  res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message);
}
