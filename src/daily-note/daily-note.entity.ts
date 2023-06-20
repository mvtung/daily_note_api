/* eslint-disable prettier/prettier */
import { Content } from 'src/contents/content.entity';
import { User } from 'src/users/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class DailyNote {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @ManyToOne(() => User, user => user.daily_note)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @OneToMany(() => Content, content_note => content_note.daily_note)
    content_note: Content[]
}
