import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'john',
      password: 'changeme',
    },
    {
      username: 'chris',
      password: 'secret',
    },
    {
      username: 'maria',
      password: 'guess',
    },
  ];

  getUsers() {
    // use plainToInstance to convert plain object to class instance for serializer
    // return this.users.map((user) => plainToInstance(SerializedUser, user));

    //or use nestjs recommended
    return this.users.map((user) => new SerializedUser(user));
  }
  getUserById(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
