import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { ContentsService } from './contents.service';
import { UpdateContentDto } from './dto/update-content.dto';
import { DailyNoteService } from 'src/daily-note/daily-note.service';
import { DailyNote } from 'src/daily-note/daily-note.entity';

@Controller()
export class ContentsController {
  constructor(
    private contentService: ContentsService,
    private dailyNoteService: DailyNoteService,
  ) {}

  @Post('daily_note/:dailyNoteId/contents')
  async create(
    @Body() createContentDto: CreateContentDto,
    @Param('dailyNoteId') dailyNoteId: DailyNote,
  ) {
    const dailyNote = await this.dailyNoteService.getDailyNote(
      Number(dailyNoteId),
    );
    if (!dailyNote) {
      throw new NotFoundException(
        `Daily note with id ${dailyNoteId} not found`,
      );
    }
    // createContentDto.daily_note = dailyNoteId;
    return this.contentService.create(createContentDto, dailyNoteId);
  }

  @Get('daily_note/:dailyNoteId/contents')
  async findByDailyContent(@Param('dailyNoteId') dailyNoteId: DailyNote) {
    return this.contentService.findByDailyNoteId(dailyNoteId);
  }

  @Patch('daily_note/contents/:id')
  async updated(
    @Param('id') id: number,
    @Body() updateContentDto: UpdateContentDto,
  ) {
    const content = await this.contentService.getContent(id);
    if (content?.length) {
      return this.contentService.update(id, updateContentDto);
    }
  }
}
