import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // set the global prefix for all the routes recommended for nginx
  app.setGlobalPrefix('api');
  await app.listen(6005);
}
bootstrap();
