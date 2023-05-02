import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  getHello(): string {
    return 'HomeService Hello World!';
  }
}
