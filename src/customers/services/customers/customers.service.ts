import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'hello@123.com',
      name: 'John Doe',
    },
    {
      id: 2,
      email: 'adam@gmail.com',
      name: 'Adam Adam',
    },
    {
      id: 3,
      email: 'spencer@gmail.com',
      name: 'Spencer Spencer',
    },
  ];
  findCustomerById(id: number) {
    return this.customers.find((customer) => customer.id === id);
  }
  getAllCustomers() {
    return this.customers;
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
}
