import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.user_name = createUserDto.user_name;
    user.password = createUserDto.password;
    user.name = createUserDto.name;
    return this.usersRepository.save(user);
  }

  async findOne(id: number): Promise<User | null> {
    const user = await this.usersRepository.findOneBy({ id: id });
    if (!user) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}
