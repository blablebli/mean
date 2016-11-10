import { Component, OnInit } from '@angular/core';
//importo el servicio primero el fichero y le digo dentro de las llaveslo que importo
 //y luego se lo meto en el provider del decorador
import{NumerosPrimosService} from '../numeros-primos.service';

@Component({
  selector: 'app-numeros-primos-con-servicio',
  templateUrl: './numeros-primos-con-servicio.component.html',
  styleUrls: ['./numeros-primos-con-servicio.component.css'],   
  providers: [NumerosPrimosService] // del import lo q le he dicho que meta
  //cuando creee la clase va ainyectar el proveedor 
})
export class NumerosPrimosConServicioComponent implements OnInit {
 listaDeNumeros: number[];
  mostrarInformacion: boolean = false;
  //por lo tanto se lo paso al constructor del provider lo que le he pasado..
  constructor(private numerosPrimosService: NumerosPrimosService) {   

    this.listaDeNumeros = this.numerosPrimosService.listaDeNumeros;
  }
/*
colorEnDistintosEstados(numero: number):string{
  //Como le pase al constructor el numeroPrimo y no le hecho new este es singleton. 
  // si le hiciera dentro del constructor un new no seria singleton//y aqui lo puedo utilizar ya
  //le he puesto el servicio aqui
      if(this.numerosPrimosService.esPrimo(numero)){
        return "red";
      } else if (this.numerosPrimosService.esMultiploDeTres(numero)){
        return "orange";
      } else{
        return "blue"; 
      }
  }*/

 /* cambiarEstadoInformacion():void{
    this.mostrarInformacion = !this.mostrarInformacion;
  }*/
  
  ngOnInit() {
  }


}