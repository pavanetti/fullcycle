import { NestFactory } from '@nestjs/core';
import { LivesModule } from './lives.module';

async function bootstrap() {
  const app = await NestFactory.create(LivesModule);
  await app.listen(3000);
}
bootstrap();
