import { Module } from '@nestjs/common';
import { Example2Service } from './example2.service';
import { Example2Controller } from './example2.controller';

@Module({
  providers: [Example2Service],
  controllers: [Example2Controller],
})
export class Example2Module {}
