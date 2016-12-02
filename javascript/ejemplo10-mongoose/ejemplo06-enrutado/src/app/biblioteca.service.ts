import { Injectable } from '@angular/core';
//1 paso importo el http para q el servicio pueda devorlver datos llamado no desde angular sino fuer
import {Http, Response, Headers, RequestOptions} from '@angular/http';
//6 paso para q funcione el observable q de
import { Observable} from 'rxjs/Rx' ;
//paso 9 importo del react x el map par hacer el mapeo
import 'rxjs/add/operator/map';
//paso 10 importo de react x para coger el error
import 'rxjs/add/operator/catch';


//4 paso para el metodo q pued
import {Libro} from './libro'

@Injectable()
export class BibliotecaService {

//paso 7 pongo la url de comunicacion
private url ="http://localhost:3000/libros"

//2 paso se lo paso al contructor por inyeccion
  constructor(private http: Http) { }

//3 paso creo un metodo q devuelve un array de libros  pero ojo esto seria sincrono no tiene sentido
  //getLibros():Libro[]
//5 Pero ojo necesito q sea un observable q es asyncrono
    getLibros():Observable<Libro[]>
    {
      //paso8 le paso la peticion de la url y me llega el response
        return  this.http.get(this.url)
                //paso 9 Ahora del get tengo q coger
                .map((response: Response) => 
                 {
                    return response.json
                })
                // error de tipo any no se el formato q tiene
               .catch((error:any)=>
               {
                 console.log("Error al procesar la peticion");
                 // de la clase observable llama al metodo throw q devuelve del error el json
                 return Observable.throw(error.json().error|| "Error del servidor");
                 })   
    }

//============================================================
//Me llega 1 libro Voy a ver como se hace un Post
     addLibro(body: Object):Observable<Libro>
     {
       //Convierto lo q me llega en el body en string
       let miLibroEnString = JSON.stringify(body);
       //le digo en la cabecera el formato q le va a llegar
       let miCabecera = new Headers({'Content-type': 'application/json'});

       let options = new RequestOptions({headers:miCabecera});

      // le digo ahora el post y como el de arriba tiene 2 parametro s el .match y el .catch
       return this.http.post(this.url,miLibroEnString,options)
             //Ahora del post quiero que haga el map es una funcion q me devuelve el response 
             //lo q cambia con el getLIbros es lo q le mando this.http.post(this.url,body,options)
               .map((response: Response) => 
              {
                  console.log ("llego la respuesta");
                  return response.json();
               })
                // error de tipo any no se el formato q tiene
               .catch((error:any)=>
              {
                  console.log("Error al procesar la peticion");
                 // de la clase observable llama al metodo throw q devuelve del error el json
                 return Observable.throw(error.json().error|| "Error del servidor");
              })
              //Una vez hecho voy a la clase formulario
      }

}
