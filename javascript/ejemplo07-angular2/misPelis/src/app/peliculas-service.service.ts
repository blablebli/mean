import { Injectable } from '@angular/core';
import { PeliculaModelo } from './modelo-peliculas/pelicula-modelo';

@Injectable()
export class PeliculasServiceService {
listaDePeliculas: PeliculaModelo[];
  constructor() { 
 
    this.listaDePeliculas = [new PeliculaModelo("Peli2",""),new PeliculaModelo("Peli3","")];

    //  this.listaDePeliculas = ["Peli2","Peli1","Peli4","Peli7","Peli5","Peli6","Peli7","Peli8"];
  }

  dameUnaPelicula(id: number):PeliculaModelo
  {
    //return this.listaDePeliculas[id];
    return this.listaDePeliculas[0];

  }
 
  dameTodasPeliculas():PeliculaModelo[]
  {
    //return this.listaDePeliculas[id];
    return this.listaDePeliculas;

  }

  ordenarPeliculas():PeliculaModelo[]
  {
    return this.listaDePeliculas.sort();

  }
  
   saluda():string
  {
    return "soy el servicio saludando";

  }
  
}


