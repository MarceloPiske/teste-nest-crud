import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { AppDataSource } from './database.providers';

AppDataSource.initialize()
.then(() => {
 console.log('Banco iniciado!!');
})
.catch(error => console.log(error));
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
