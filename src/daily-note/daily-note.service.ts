import { Injectable } from '@nestjs/common';
import { DailyNote } from './daily-note.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDailyNoteDto } from './dto/create-daily-note.dto';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class DailyNoteService {
  constructor(
    @InjectRepository(DailyNote)
    private readonly dailyNoteRepository: Repository<DailyNote>,
  ) {}

  create(createDailyNoteDto: CreateDailyNoteDto): Promise<DailyNote> {
    const dailyNote = new DailyNote();
    dailyNote.title = createDailyNoteDto.title;
    dailyNote.content = createDailyNoteDto.content;
    dailyNote.user = createDailyNoteDto.user;
    return this.dailyNoteRepository.save(dailyNote);
  }

  async findByUserId(userId: number): Promise<DailyNote[]> {
    return this.dailyNoteRepository.find({ where: { user: { id: userId } } });
  }

  async update(
    id: number,
    data: Partial<DailyNote>,
  ): Promise<DailyNote | null> {
    await this.dailyNoteRepository.update(id, data);
    const options: FindOneOptions<DailyNote> = {
      where: { id: id },
    };

    return this.dailyNoteRepository.findOne(options);
  }
}
