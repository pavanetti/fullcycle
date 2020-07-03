import { Controller, Get } from '@nestjs/common';
import { LivesService } from './lives.service';

@Controller('maratona')
export class LivesController {
  constructor(private readonly service: LivesService) {}

  @Get()
  lives(): Array<string> {
    return this.service.lives();
  }
}
