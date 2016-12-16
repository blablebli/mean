import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  //tiene q devolver la peticion 
  gimmeTheMoney(){
    return this.http.get("www.takeitallbaby.noexiste"); //es un url q no va a ser invoncada.
  }

}
