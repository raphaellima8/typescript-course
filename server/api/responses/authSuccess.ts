import { Request, Response } from 'express';
import * as jwt from 'jwt-simple';
import * as HttpStatus from 'http-status';
import * as bcrypt from 'bcrypt';
const config = require('../../config/env/config')();

export default function authSuccess(res: Response, credentials: any, data: any) {
  const isMatch = bcrypt.compareSync(credentials.password, data.password);

  if(isMatch) {
    const payload = { id: data.id };
    res.json({
      token: jwt.encode(payload, config.secret)
    });
  } else {
    res.sendStatus(HttpStatus.UNAUTHORIZED);
  }
}
