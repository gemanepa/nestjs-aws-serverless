import { Test, TestingModule } from '@nestjs/testing';
import { Example2Controller } from './example2.controller';

describe('Example2Controller', () => {
  let controller: Example2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Example2Controller],
    }).compile();

    controller = module.get<Example2Controller>(Example2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
