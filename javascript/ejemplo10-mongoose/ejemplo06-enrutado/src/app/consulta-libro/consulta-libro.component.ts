import { Component, OnInit } from '@angular/core';
//necesito la ruta actual q ha sido ejecuta con el activatedRoute lo importo
import {ActivatedRoute} from '@angular/router';

import {Libro} from '../libro';


@Component({
  selector: 'app-consulta-libro',
  templateUrl: './consulta-libro.component.html',
  styleUrls: ['./consulta-libro.component.css']
})
export class ConsultaLibroComponent implements OnInit {
//depues de improtar  el activatede ya puedo en el constructor igual q cuando se inyecta me llega este objeto
//preparado y 
  constructor(private route: ActivatedRoute) {
//Creo un nuevo libro vacio para q no me de error y peuda hacer todo
this.libro = new Libro(0,"");

   }

  public libro: Libro

  ngOnInit() {

    //Despues de meter en el constructor el activated
  this.libro.id =  this.route.snapshot.params['id'] //este id es el q recogera en el html.
  }

}
