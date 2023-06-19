import { Test, TestingModule } from '@nestjs/testing';
import { DailyNoteService } from './daily-note.service';

describe('DailyNoteService', () => {
  let service: DailyNoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyNoteService],
    }).compile();

    service = module.get<DailyNoteService>(DailyNoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
