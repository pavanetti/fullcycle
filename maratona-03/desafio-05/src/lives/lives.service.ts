import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Live } from './live.entity';

@Injectable()
export class LivesService {
  constructor(
    @InjectRepository(Live)
    private readonly repository: Repository<Live>,
  ) {}

  async lives(): Promise<Live[]> {
    return this.repository.find();
  }
}
