import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
private users =["luis", "alberto", "rodrigo"]
  constructor() { }
  
  getUsers():Array<string>{
    return this.users;
  }
}
