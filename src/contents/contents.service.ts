/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Content } from './content.entity';
import { CreateContentDto } from './dto/create-content.dto';
import { Repository } from 'typeorm';
import { DailyNote } from 'src/daily-note/daily-note.entity';

@Injectable()
export class ContentsService {
  constructor(
    @InjectRepository(Content)
    private readonly contentRepository: Repository<Content>,
  ) { }

  async create(createContentDto: CreateContentDto, dailyNoteId: DailyNote): Promise<Content> {
    const content = new Content();
    content.content = createContentDto.content;
    content.image = createContentDto.image;
    content.daily_note = dailyNoteId;
    return this.contentRepository.save(content);
  }

  async update(
    id: number,
    data: Partial<Content>,
  ): Promise<Content | null> {
    await this.contentRepository.update(id, data);
    return this.contentRepository.findOneBy({ id: id })
  }

  async getContent(id: number): Promise<Content[] | null> {
    const content = await this.contentRepository.findOneBy({ id: id });    
    if (!content) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return [content];
  }

  async findByDailyNoteId(dailyNoteId: DailyNote): Promise<Content[] | null> {
    const content = await this.contentRepository.find({
      where: { daily_note: { id: Number(dailyNoteId) } },
    });
    if (!content.length) {
      throw new NotFoundException(`Content not found`);
    }
    return content;
  }
}
