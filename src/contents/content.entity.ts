/* eslint-disable prettier/prettier */
import { DailyNote } from 'src/daily-note/daily-note.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  image: string;

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => DailyNote, (dailyNote) => dailyNote.content_note)
  @JoinColumn({ name: 'daily_note_id' })
  daily_note: DailyNote;
}
