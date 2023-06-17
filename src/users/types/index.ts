import { Exclude } from 'class-transformer';

export interface User {
  username: string;
  password: string;
}
export class SerializedUser {
  username: string;

  @Exclude()
  password: string;

  //partial is used in tpescript to make all the fields optional
  constructor(partial: Partial<SerializedUser>) {
    //object.assign is used to copy all the fields from partial to this
    Object.assign(this, partial);
  }
}
