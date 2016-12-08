import { Component, OnInit } from '@angular/core';
import {Libro} from '../modelo/libro'; //paso1 importo el modelo q

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent implements OnInit {

 private libro: Libro;//2º me creo una variable 

  constructor() { 
//3º) Lo inicializo la variable de tipo libro
    this.libro = new Libro ("",""); // solo le pongo 2 campos a vacio  el 3º campo era opcional 
    //4º Ahora voy al html y me defino un formulario 

  }
//5º paso tengo q crear el metodo de enviarFormulario y como no se el tipo pongo any q es cualquier cosa

enviarFormulario(formulario: any){
  console.log("Datos del formulario enviardo" + formulario);//le pongo la variable q le paso en la funcion
  // q es formulario
  //Pongo para q me devuelva el valor del libro q le estoy devolviendo 
  console.log("Libro:"+this.libro);
  //6ºº9 me voy al index.html y pongo el selector
  //7º en el app.modul.ts le pongo en el botstarp FormularioCo0mponent 

//8º) Pnogo en el modelo el campo titulo publico para una prueba de cogerlo desde aqui
///Veo q es two way pq lo tengo linkado en el formulario despues de hacerle en component el new Libro y lo q
//cambio en la vista html de formulario lo guarda cuando le doy al boton enviar en el modelo 
// y tambien veo que por otro laod lo si lo hago desde el component tambien se me refleja en el formulario.
    this.libro.titulo = "Otro";//  se lo paso hardcodeado de forma que despuesd e pasarle el valor
     this.libro.titulo =formulario.titulo; // podia pasarle del formulario el campo del titulo pero en realidad no hace falta

  }
  ngOnInit() {
  }

}
