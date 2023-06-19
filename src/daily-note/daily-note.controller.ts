import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { DailyNoteService } from './daily-note.service';
import { CreateDailyNoteDto } from './dto/create-daily-note.dto';
import { UpdateDailyNoteDto } from './dto/update-daily-note.dto';

@Controller()
export class DailyNoteController {
  constructor(private dailyNoteService: DailyNoteService) {}

  @Get('users/:userId/daily-note')
  async findByUserId(@Param('userId') userId: number) {
    return this.dailyNoteService.findByUserId(userId);
  }

  @Post('daily-note')
  create(@Body() createDailyNoteDto: CreateDailyNoteDto) {
    return this.dailyNoteService.create(createDailyNoteDto);
  }

  @Patch('users/:userId/daily-note/:id')
  async update(
    @Param('id') id: number,
    @Body() updateDailyNoteDto: UpdateDailyNoteDto,
  ) {
    return this.dailyNoteService.update(id, updateDailyNoteDto);
  }
}
