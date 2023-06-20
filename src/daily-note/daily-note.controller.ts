import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { DailyNoteService } from './daily-note.service';
import { CreateDailyNoteDto } from './dto/create-daily-note.dto';
import { UpdateDailyNoteDto } from './dto/update-daily-note.dto';
import { UsersService } from 'src/users/users.service';

@Controller()
export class DailyNoteController {
  constructor(
    private dailyNoteService: DailyNoteService,
    private usersService: UsersService,
  ) {}

  @Get('users/:userId/daily-note')
  async findByUserId(@Param('userId') userId: number) {
    const dailyNoteByUserId = await this.dailyNoteService.findByUserId(userId);
    return dailyNoteByUserId;
  }

  @Post('daily-note')
  async create(@Body() createDailyNoteDto: CreateDailyNoteDto) {
    const userId = Number(createDailyNoteDto.user);
    const getUser = await this.usersService.findOne(userId);
    if (getUser) {
      return this.dailyNoteService.create(createDailyNoteDto);
    }
  }

  @Patch('users/:userId/daily-note/:id')
  async update(
    @Param('id') id: number,
    @Body() updateDailyNoteDto: UpdateDailyNoteDto,
  ) {
    return this.dailyNoteService.update(id, updateDailyNoteDto);
  }
}
