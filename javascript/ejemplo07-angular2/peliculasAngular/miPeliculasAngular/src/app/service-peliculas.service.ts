import { Injectable } from '@angular/core';

@Injectable()
export class ServicePeliculasService {

  listaDePeliculas: string[];

  constructor() { 
    this.listaDePeliculas = ["Peli1","Peli2","Peli3","Peli4","Peli5","Peli6","Peli7","Peli8"];
  }

  dameUnaPelicula(id: number):string
  {
    //return this.listaDePeliculas[id];
    return this.listaDePeliculas[0];

  }
 
 /* dameTodasPeliculas(id: number):string[]
  {
    //return this.listaDePeliculas[id];
    return this.listaDePeliculas[;

  }*/

}
