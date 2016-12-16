import { Injectable } from '@angular/core';

@Injectable()
export class MockusersService {

  constructor() { }
    getUsers():Array<string>{
      // falseo el resultado pq podia hacer este serivio podria ser muy complicado
      // q dependa de otras cosas y le digo q devuelva solo 2 valores
    return ["tu", "y yo"];
  }

}
