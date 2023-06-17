import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  findCustomer() {
    return {
      email: 'hello@123.com',
      name: 'Pratham',
      createdAt: new Date(),
    };
  }
}
