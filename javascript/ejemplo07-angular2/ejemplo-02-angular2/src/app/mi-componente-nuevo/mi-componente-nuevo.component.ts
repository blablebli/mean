import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente-nuevo',
 // templateUrl: './mi-componente-nuevo.component.html',
template: '<p> Hola Mundo <p>',
  //styleUrls: ['./mi-componente-nuevo.component.css']
    styles: [`p {  background-color:red; }`]
})
export class MiComponenteNuevoComponent implements OnInit {

mostrarInformacion: boolean;
varaibleDeInstancia :string;
tomaArray :number[] = [1,3,5,4,2,6,7,17];
  constructor() {
    this.varaibleDeInstancia = "Renderizado componente ngif ngfor"
  this.mostrarInformacion = false;
  }

 colorEnPares(numero: number): string{
if(numero %2 ==0)
{return "blue";}
return "red"; // si es impar devuelve rojo
 }

  ngOnInit() {
    console.log("inciando el componente nuevo por Pedro1");
    console.log("inciando el componente nuevo por Pedro2");
  }
cambiarEstadoInformacion():void{
  this.mostrarInformacion = !this.mostrarInformacion;
}


}
