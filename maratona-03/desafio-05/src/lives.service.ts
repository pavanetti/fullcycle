import { Injectable } from '@nestjs/common';

@Injectable()
export class LivesService {
  lives(): Array<string> {
    return ['Hello World!'];
  }
}
