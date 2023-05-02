import { Module } from '@nestjs/common';
import { ExampleModule } from './example/example.module';
import { Example2Module } from './example2/example2.module';
import { HomeModule } from './home/home.module';

@Module({
  imports: [ExampleModule, Example2Module, HomeModule],
})
export class AppModule {}
