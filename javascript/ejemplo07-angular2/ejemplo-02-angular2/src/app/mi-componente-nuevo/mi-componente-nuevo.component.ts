import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente-nuevo',
//  templateUrl: './mi-componente-nuevo.component.html',
template: '<p> Hola Mundo <p>',
  //styleUrls: ['./mi-componente-nuevo.component.css']
    styles: [`p {  background-color:red; }`]
})
export class MiComponenteNuevoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("inciando el componente nuevo por Pedro1");
    console.log("inciando el componente nuevo por Pedro2");
  }

}
