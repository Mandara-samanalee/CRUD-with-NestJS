import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({    whitelist: true,
}
));//this is used to validate the data we entered
  await app.listen(4000);
}
bootstrap();
