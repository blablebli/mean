
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-peliculas-fila',
  templateUrl: './peliculas-fila.component.html',
  styleUrls: ['./peliculas-fila.component.css'],
   inputs:['numero'],// el input indica lo que va a recibir alguien le mandara a traves de numero
  // que corresponde al html pq yo le quiero pasar el numero desde fuera no va a ser el 0 que me habia definido
  //antes le llamare las veces q quiera y con el valor q sea
  outputs:['eventoMostrar']
})

export class PeliculasFilaComponent implements OnInit {

 private numero: number = 0;
 private eventoMostrar: EventEmitter<boolean> = new EventEmitter<boolean>();
 private mostrarContenido : boolean= false;
  constructor() { }

  ngOnInit() {
  }

//Aqui disparo el evento

enviarNotificacion():void{
  //hago el inverso
  this.mostrarContenido =!this.mostrarContenido;
  this.eventoMostrar.emit(this.mostrarContenido);
  console.log("Evento enviado!");
}

}