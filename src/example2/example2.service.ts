import { Injectable } from '@nestjs/common';

@Injectable()
export class Example2Service {
  getHello(): string {
    return 'Example2Service Hello World!';
  }
}
