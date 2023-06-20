import { Module } from '@nestjs/common';
import { ContentsController } from './contents.controller';
import { ContentsService } from './contents.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from './content.entity';
import { DailyNoteService } from 'src/daily-note/daily-note.service';
import { DailyNote } from 'src/daily-note/daily-note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Content, DailyNote])],
  controllers: [ContentsController],
  providers: [ContentsService, DailyNoteService],
})
export class ContentsModule {}
