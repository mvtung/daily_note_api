import { Injectable, NotFoundException } from '@nestjs/common';
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

  getDailyNote(id: number): Promise<DailyNote | null> {
    const options: FindOneOptions<DailyNote> = {
      where: { id: id },
    };
    return this.dailyNoteRepository.findOne(options);
  }

  async create(createDailyNoteDto: CreateDailyNoteDto): Promise<DailyNote> {
    const dailyNote = new DailyNote();
    dailyNote.title = createDailyNoteDto.title;
    dailyNote.user = createDailyNoteDto.user;
    const saveDailyNote = await this.dailyNoteRepository.save(dailyNote);
    return saveDailyNote;
  }

  async findByUserId(userId: number): Promise<DailyNote[]> {
    const getDailyNoteByUserId = await this.dailyNoteRepository.find({
      where: { user: { id: userId } },
    });
    if (!getDailyNoteByUserId.length) {
      throw new NotFoundException(`Daily note not found`);
    }
    return getDailyNoteByUserId;
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
