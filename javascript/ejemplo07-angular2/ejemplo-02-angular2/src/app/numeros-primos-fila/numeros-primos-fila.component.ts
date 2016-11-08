import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros-primos-fila',
  templateUrl: './numeros-primos-fila.component.html',
  styleUrls: ['./numeros-primos-fila.component.css'],
  inputs:['numero']// el input indica lo que va a recibir alguien le mandara a traves de numero
  // que corresponde al html pq yo le quiero pasar el numero desde fuera no va a ser el 0 que me habia definido
  //antes le llamare las veces q quiera y con el valor q sea
})
export class NumerosPrimosFilaComponent implements OnInit {

 private numero: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
