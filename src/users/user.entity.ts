/* eslint-disable prettier/prettier */
import { DailyNote } from 'src/daily-note/daily-note.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other'
}
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_name: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column({
        type: 'enum',
        enum: Gender,
        default: Gender.OTHER
    })
    gender: Gender;

    @Column({ nullable: true })
    age: number;

    @Column({ nullable: true })
    avatar: string;

    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @OneToMany(() => DailyNote, daily_note => daily_note.user)
    daily_note: DailyNote[];
}

