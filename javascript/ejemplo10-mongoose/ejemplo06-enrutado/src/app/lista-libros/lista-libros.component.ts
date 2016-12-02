import { Component, OnInit } from '@angular/core';

import {Libro} from '../libro';
//Ahora importo mi servicio
import {BibliotecaService} from '../Biblioteca.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css'],
  //paso2
  providers: [BibliotecaService]
})
export class ListaLibrosComponent implements OnInit {
private libros: Libro[];
  /*constructor() { 
// y aqui en el constructor me creo un par de libros
this.libros = [
  new Libro(1,"capas rojas"),
   new Libro(2,"angular dummy")
];

  }*/

//Ahroa ya no utilizo el constructor donde lo ponía a mano:
  constructor(private service: BibliotecaService) { 
//me suscribo y necesito indicar en la supscripcion me puede venir los datos del .map y 2 parametro del error 
      this.service.getLibros().subscribe((datos)=>{
      // en el primer parametro de subscribe aqui tengo los datos y digo lo q hago
      //como es un array de libros coincide con el tipo de datos
            this.libros= datos;
      },(error)=>{
            //en el 2 parametro del sbuscribe tengo e elrro de 
            console.log("Error" + error);
      }),
      ()=>{
        console.log("Completada");
      };

  }

  ngOnInit() {
    
  }

}
