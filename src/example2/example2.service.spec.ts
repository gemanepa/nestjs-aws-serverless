import { Test, TestingModule } from '@nestjs/testing';
import { Example2Service } from './example2.service';

describe('Example2Service', () => {
  let service: Example2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Example2Service],
    }).compile();

    service = module.get<Example2Service>(Example2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
