import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middleware';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //all paths
    //  consumer.apply(ValidateCustomerMiddleware).forRoutes('customers');
    //  or consumer.apply(ValidateCustomerMiddleware).forRoutes(CustomersController);

    //specific path
    // consumer.apply(ValidateCustomerMiddleware).forRoutes({
    //   path: 'customers/search/:id',
    //   method: RequestMethod.GET,
    // });

    //multiple paths
    // consumer.apply(ValidateCustomerMiddleware).forRoutes(
    //   {
    //     path: 'customers/search/:id',
    //     method: RequestMethod.GET,
    //   },
    //   {
    //     path: 'customers',
    //     method: RequestMethod.GET,
    //   },
    // );

    //exclude path
    consumer
      //many middlewares can be added here
      .apply(ValidateCustomerMiddleware, (req, res, next) => {
        console.log('last middleware');
        next();
      })
      .exclude({
        path: 'customers/create',
        method: RequestMethod.POST,
      })
      .forRoutes(CustomersController);
  }
}
