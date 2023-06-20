/* eslint-disable prettier/prettier */
import { User } from 'src/users/user.entity';

export class UpdateDailyNoteDto {
  title: string;
  user: User;
}
