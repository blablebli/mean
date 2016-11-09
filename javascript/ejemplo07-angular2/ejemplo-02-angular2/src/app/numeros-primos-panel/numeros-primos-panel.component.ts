import { Component, OnInit } from '@angular/core';
import {NumerosPrimosService} from '../numeros-primos.service'

@Component({
  selector: 'app-numeros-primos-panel',
  templateUrl: './numeros-primos-panel.component.html',
  styleUrls: ['./numeros-primos-panel.component.css'],
  providers: [NumerosPrimosService]
})
export class NumerosPrimosPanelComponent implements OnInit {

  listaDeNumeros: number[];
  private mostrarInformacion: boolean = false;
  constructor(private numerosPrimosService: NumerosPrimosService ) { 
    this.listaDeNumeros = this.numerosPrimosService.listaDeNumeros;
  }

tipoDeNumero(numero: number):string{
      if(this.numerosPrimosService.esPrimo(numero)){
        return "Es numero primo";
      } else if (this.numerosPrimosService.esMultiploDeTres(numero)){
        return "es multip de tres";
      } else{
        return "no es primo"; 
      }
  }
  colorEnDistintosEstados(numero: number):string{
      if(this.numerosPrimosService.esPrimo(numero)){
        return "red";
      } else if (this.numerosPrimosService.esMultiploDeTres(numero)){
        return "orange";
      } else{
        return "blue"; 
      }
  }

  eventoDeFilaRecibido(eventoRecibido:boolean):void
  {
      this.mostrarInformacion = eventoRecibido;
      console.log("Evento recibido;")
  }

  ngOnInit() {
  }
  
}
