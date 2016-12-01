import { Component, OnInit } from '@angular/core';
import { PeliculasServiceService } from '../peliculas-service.service';
import { PeliculaModelo } from '../modelo-peliculas/pelicula-modelo';

@Component({
  selector: 'app-componente-peliculas',
  templateUrl: './componente-peliculas.component.html',
  styleUrls: ['./componente-peliculas.component.css'],
  providers: [PeliculasServiceService]
})

export class ComponentePeliculasComponent implements OnInit {

  listaDePeliculas: PeliculaModelo[];
  saludaServicioString: string;
  //unaPelicula: string;
  mostrarInformacion: boolean = false;
  constructor(private servicioPeliculasService: PeliculasServiceService ) { 
      this.listaDePeliculas = this.servicioPeliculasService.listaDePeliculas;  
      this.saludaServicioString= this.saludaServicioString;
    
  }

  dameUnaPelicula(numero: number):PeliculaModelo{
    return  this.servicioPeliculasService.dameUnaPelicula(0);
//  return " ";
 }

   dameTodasPeliculas():PeliculaModelo[]{
    return  this.servicioPeliculasService.dameTodasPeliculas();

 }


ordenarPeliculas():PeliculaModelo[]{

return  this.servicioPeliculasService.ordenarPeliculas();


}
  ngOnInit() {
  }

}
