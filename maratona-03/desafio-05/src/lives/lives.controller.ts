import { Controller, Get } from '@nestjs/common';
import { LivesService } from './lives.service';

@Controller('maratona')
export class LivesController {
  constructor(private readonly service: LivesService) {}

  @Get()
  async lives(): Promise<string[]> {
    const lives = await this.service.lives();
    return lives.map(live => live.name);
  }
}
