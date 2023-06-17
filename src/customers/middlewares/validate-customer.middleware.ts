import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response, Request } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Inside ValidateCustomerMiddleware');
    const { authorization } = req.headers;
    if (!authorization) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .send({ message: 'Authorization header is missing' });
    }
    if (authorization === '123') next();
    else
      return res.status(HttpStatus.FORBIDDEN).send({
        message: 'You are not authorized to access this resource',
      });
  }
}
