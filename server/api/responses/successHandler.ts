import { Response } from 'express';
import * as HTTPStatus from 'http-status';

export function onSuccess(res: Response, data: any) {
  res.status(HTTPStatus.OK).json({ payload: data });
}
