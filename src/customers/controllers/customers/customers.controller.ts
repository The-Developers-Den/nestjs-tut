import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  //   @Get(':id')
  //Express way
  //! if you are using express way then don't send directly with the help of reutn use res.send()
  //   getCustomers(
  //     @Param('id', ParseIntPipe) id: number,
  //     @Req() req: Request,
  //     @Res() res: Response,
  //   ) {
  //     const customer = this.customersService.findCustomerById(id);
  //     if (customer) {
  //       res.status(200).send(customer);
  //     } else {
  //       res.status(400).send({ msg: 'Customer not found' });
  //     }
  //   }

  //NestJs way
  @Get('search/:id')
  getCustomers(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomerById(id);
    if (customer) return customer;
    //! we can use the pre-defined HttpException instead of hardcoding the status code and message
    else throw new HttpException('Customer not found!', HttpStatus.BAD_REQUEST);
  }

  @Get('')
  getAllCustomers() {
    return this.customersService.getAllCustomers();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  // we can also use express way to get the body of the request
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.customersService.createCustomer(createCustomerDto);
  }
}
