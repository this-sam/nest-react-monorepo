import { Test, TestingModule } from '@nestjs/testing';
import { SharedLibraryService } from './shared-library.service';

describe('SharedLibraryService', () => {
  let service: SharedLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharedLibraryService],
    }).compile();

    service = module.get<SharedLibraryService>(SharedLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
