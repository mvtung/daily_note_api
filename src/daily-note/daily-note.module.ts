import { Module } from '@nestjs/common';
import { DailyNoteController } from './daily-note.controller';
import { DailyNoteService } from './daily-note.service';
import { DailyNote } from './daily-note.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DailyNote, User])],
  controllers: [DailyNoteController],
  providers: [DailyNoteService, UsersService],
})
export class DailyNoteModule {}
