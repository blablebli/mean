import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ExternasPeliculasModelo  } from './modelo-peliculas/externas-peliculas-modelo';

@Injectable()
export class Pelis2ExternasServiceExpressMongooseService {

 private url = "http://localhost:3000/pelisExternas"
  constructor(private http: Http) { }

  getPelisExternas(): Observable<ExternasPeliculasModelo []>{
    return this.http.get(this.url)
        .map((response: Response)=>{
            return response.json()
        })
        .catch((error:any)=>{
          console.log("Error al procesar la peticion");
          return Observable
          .throw(error.json().error || "Error de servidor");
        })
}
  	addPeliExterna(body: Object): Observable<ExternasPeliculasModelo >{
      let miPeliculaEnString = JSON.stringify(body);
      //"{id:null,titulo:'Lo que sea'}"
      let miCabecera = new Headers(
        {'Content-type':'application/json'});

      let options = new RequestOptions({headers:miCabecera})
      return this.http.post(this.url,miPeliculaEnString,options)
          .map((response:Response)=>{
            console.log("LLego la respuesta!");
            return response.json();
          })
          .catch((error:any)=>{
                console.log("Error al procesar la peticion");
                return Observable
                .throw(error.json().error || "Error de servidor");
          })
    }
}
