import { Component, OnInit } from '@angular/core';
import { ServicePeliculasService } from '../service-peliculas.service';


@Component({
  selector: 'app-componente-peliculas',
  templateUrl: './componente-peliculas.component.html',
  styleUrls: ['./componente-peliculas.component.css'],
  providers: [ServicePeliculasService]
})

export class ComponentePeliculasComponent implements OnInit {

  listaDePeliculas: string[];
  //unaPelicula: string;
  mostrarInformacion: boolean = false;
  constructor(private servicioPeliculasService: ServicePeliculasService ) { 
    this.listaDePeliculas = this.servicioPeliculasService.listaDePeliculas;  
                     
  }

  dameUnaPelicula(numero: number):string{
 return  this.servicioPeliculasService.dameUnaPelicula(0);
//  return " ";
 }

  ngOnInit() {
  }

}
