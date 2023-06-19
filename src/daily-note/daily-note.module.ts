import { Module } from '@nestjs/common';
import { DailyNoteController } from './daily-note.controller';
import { DailyNoteService } from './daily-note.service';
import { DailyNote } from './daily-note.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DailyNote])],
  controllers: [DailyNoteController],
  providers: [DailyNoteService],
})
export class DailyNoteModule {}
