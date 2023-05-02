import { Controller, Get } from '@nestjs/common';
import { Example2Service } from './example2.service';

@Controller('example2')
export class Example2Controller {
  constructor(private readonly example2Service: Example2Service) {}

  @Get()
  getHello(): string {
    return this.example2Service.getHello();
  }
}
