import { Injectable } from '@angular/core';
import { PeliculaModelo } from './modelo-peliculas/pelicula-modelo';

@Injectable()
export class PeliculasServiceService {
listaDePeliculas: PeliculaModelo[];
 
 constructor() { 
    this.listaDePeliculas = [new PeliculaModelo("Peli4","OEl regreso de ", "resumen3 de la peli"),
                              new PeliculaModelo("Peli3","LA VUELTA DE","resumen2 de la pelia"),
                              new PeliculaModelo("Peli1","Sl regreso de ", "resumen4de la peli"),
                              new PeliculaModelo("Peli2","NA VUELTA DE","resumen1 de la pelia")                              
                              ];
  }

dynamicSort(property:any) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

  inversoPeliculasArray(campoOrdenar:number):PeliculaModelo[]
  {
  //return this.listaDePeliculas.reverse();

    switch (campoOrdenar)
    {
      case 1:
        this.listaDePeliculas.sort(this.dynamicSort("titulo"));
        break;
         
      case 2:
        this.listaDePeliculas.sort(this.dynamicSort("autor"));
        break;
     
      case 3:
        this.listaDePeliculas.sort(this.dynamicSort("sinopsis"));
        break;
    }
   return this.listaDePeliculas;
  }


  dameUnaPelicula(id: number):PeliculaModelo
  {
     return this.listaDePeliculas[id];

  }
 
  dameTodasPeliculas():PeliculaModelo[]
  {
     return this.listaDePeliculas;
  }
   
   saluda():string
  {
    return "soy el servicio saludando";

  }
  
}


