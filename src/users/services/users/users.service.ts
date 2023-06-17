import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      id: 2,
      username: 'chris',
      password: 'secret',
    },
    {
      id: 3,
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
  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
