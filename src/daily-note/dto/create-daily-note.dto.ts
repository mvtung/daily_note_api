/* eslint-disable prettier/prettier */
import { User } from 'src/users/user.entity';

export class CreateDailyNoteDto {
  title: string;
  user: User;
}
