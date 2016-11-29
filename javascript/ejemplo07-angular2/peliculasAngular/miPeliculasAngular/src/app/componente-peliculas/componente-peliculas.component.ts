import { Component, OnInit } from '@angular/core';
import { ServicePeliculasService } from '../service-peliculas.service';
import { Pelicula } from '../modelo/pelicula';

@Component({
  selector: 'app-componente-peliculas',
  templateUrl: './componente-peliculas.component.html',
  styleUrls: ['./componente-peliculas.component.css'],
  providers: [ServicePeliculasService]
})

export class ComponentePeliculasComponent implements OnInit {

  listaDePeliculas: Pelicula[];
  //unaPelicula: string;
  mostrarInformacion: boolean = false;
  constructor(private servicioPeliculasService: ServicePeliculasService ) { 
    this.listaDePeliculas = this.servicioPeliculasService.listaDePeliculas;  
                     
  }

  dameUnaPelicula(numero: number):Pelicula{
    return  this.servicioPeliculasService.dameUnaPelicula(0);
//  return " ";
 }

   dameTodasPeliculas():Pelicula[]{
    return  this.servicioPeliculasService.dameTodasPeliculas();

 }


ordenarPeliculas():Pelicula[]{

return  this.servicioPeliculasService.ordenarPeliculas();


}
  ngOnInit() {
  }

}
