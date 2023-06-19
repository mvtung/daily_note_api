import { Test, TestingModule } from '@nestjs/testing';
import { DailyNoteController } from './daily-note.controller';

describe('DailyNoteController', () => {
  let controller: DailyNoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyNoteController],
    }).compile();

    controller = module.get<DailyNoteController>(DailyNoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
