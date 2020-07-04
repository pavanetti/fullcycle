import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LivesController } from './lives.controller';
import { LivesService } from './lives.service';
import { Live } from './live.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Live])],
  controllers: [LivesController],
  providers: [LivesService],
})
export class LivesModule {}
