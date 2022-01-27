/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { createDocument } from './config/swagger/swagger';

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup('api', app, createDocument(app));
   app.useGlobalPipes(new ValidationPipe());
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  await app.listen(3000);
}
bootstrap();
