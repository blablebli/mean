import { Injectable } from '@angular/core';
import { Pelicula } from './modelo/pelicula';

@Injectable()
export class ServicePeliculasService {

  listaDePeliculas: Pelicula[];

  constructor() { 
    this.listaDePeliculas = [new Pelicula("Peli2",""),
                             new Pelicula("Peli3","")];

    //  this.listaDePeliculas = ["Peli2","Peli1","Peli4","Peli7","Peli5","Peli6","Peli7","Peli8"];
  }

  dameUnaPelicula(id: number):Pelicula
  {
    //return this.listaDePeliculas[id];
    return this.listaDePeliculas[0];

  }
 
  dameTodasPeliculas():Pelicula[]
  {
    //return this.listaDePeliculas[id];
    return this.listaDePeliculas;

  }

  ordenarPeliculas():Pelicula[]
  {
    return this.listaDePeliculas.sort();

  }

}


