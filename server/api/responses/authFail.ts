import { Request, Response } from 'express';
import * as HttpStatus from 'http-status';

export default function authFail(req: Request, res: Response) {
  res.sendStatus(HttpStatus.UNAUTHORIZED);
}
