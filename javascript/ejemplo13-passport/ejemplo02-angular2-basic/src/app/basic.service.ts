import { Injectable } from '@angular/core';
//1ºTengo q añadir las importaciones header cabeceras de seguridad
import{ Http, Response, Headers, RequestOptions } from '@angular/http';
import{ Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'; // para el map
import 'rxjs/add/operator/catch';

@Injectable()
export class BasicService {

//2º inyecto el http 
  constructor( private http: Http){}

  //3º creo el result
  getResultado():Observable<string>{

    //3.1Esto sería sin seguridad
    /*return this.http.get("http://127.0.0.1:8080/home") // ya devuelve un observable
     .map((response: Response)=>{   // Aqui mapeo el response.
            return response; // que devuelva el map el response
      }) //fin map
      .catch((error:any)=>{
         console.error("Error", error);
         //como el error no me lo devuelve como observable tengo q hacer esto
         return Observable.throw("Error al procesar la información");
      }) // fin catch;*/
      
     //3.2  con seguridad
    //let cabeceraDeSeguridad = new Headers({'Content-Type':'application/json'}); 
//otra forma como la de arriba de cabecera pero con appende en el header en lugar de meterlo como parametro

//Miraria si lo tengo en la session primero y si no lo tengo q compruebe la seguridad
let username ="luis";
let password = "luis";
   
    let cabeceraDeSeguridad = new Headers();

    // son 2 parametros el tipo de autorizacion y los datos q se envian
    cabeceraDeSeguridad.append('Authorization', "Basic " +  btoa(username + ":" + password));
   
       // me queda a la cabecera meterle opciones y ya esta
    let opcionesDeRequest = new RequestOptions({headers:cabeceraDeSeguridad});
   
    //ya tengo la cabecera con sus opciones se lo meto al get y ya tengo seguridad
    return this.http.get("http://127.0.0.1:8080/home", opcionesDeRequest)
      .map((response: Response)=>{   // Aqui mapeo el response.
            return response; // que devuelva el map el response
      }) //fin map
      .catch((error:any)=>{
         console.error("Error", error);
         //como el error no me lo devuelve como observable tengo q hacer esto
         return Observable.throw("Error al procesar la información");
      }) // fin catch;
  }  //get resultado
}// Basic SErvice
