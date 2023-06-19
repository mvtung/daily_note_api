/* eslint-disable prettier/prettier */
import { User } from 'src/users/user.entity';

export class CreateDailyNoteDto {
  title: string;
  content: string;
  user: User;
}
