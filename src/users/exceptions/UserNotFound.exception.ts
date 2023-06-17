import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor(msg?: string, statusCode?: number) {
    super(msg || 'User not found', statusCode || HttpStatus.BAD_REQUEST);
  }
}
