import { Component, OnInit, EventEmitter } from '@angular/core';
import { PeliculasServiceService } from '../peliculas-service.service';
import { PeliculaModelo } from '../modelo-peliculas/pelicula-modelo';

@Component({
  selector: 'app-componente-peliculas',
  templateUrl: './componente-peliculas.component.html',
  styleUrls: ['./componente-peliculas.component.css'],
  providers: [PeliculasServiceService],
  outputs: ['eventoMostrar']
})

export class ComponentePeliculasComponent implements OnInit {

  listaDePeliculas: PeliculaModelo[];
    listaDePelicula2: PeliculaModelo[];
      listaDePelicula3: PeliculaModelo[];
  saludaServicioString: string;
  //unaPelicula: string;
  mostrarInformacion: boolean = false;

   private eventoMostrar: EventEmitter<boolean> = new EventEmitter<boolean>();
     private eventoMostrar2: EventEmitter<void> = new EventEmitter<void>();
private eventoMostrar3: EventEmitter<string> = new EventEmitter<string>();

    private mostrarContenido: boolean = false;
     private mostrarContenido2(){
       console.log("Entra2");
     };

      private mostrarContenido3(): string{
       console.log("Entra3");
       return "Entra3";
     };

  constructor(private servicioPeliculasService: PeliculasServiceService ) 
    { 
      this.listaDePeliculas = this.servicioPeliculasService.listaDePeliculas;  
      //this.saludaServicioString = this.servicioPeliculasService.saluda;
    console.log("El resultado:" + this.servicioPeliculasService.saluda);
      this.saludaServicioString = this.servicioPeliculasService.saluda();
        console.log("Una peli:" +  this.servicioPeliculasService.dameUnaPelicula(0).titulo);
        this.listaDePelicula2 = this.servicioPeliculasService.dameTodasPeliculas();
    }

 enviarNotificacion():void{

   this.eventoMostrar3.emit(this.mostrarContenido3());
   this.eventoMostrar2.emit(this.mostrarContenido2());
    /*this.mostrarContenido = !this.mostrarContenido;
    console.log("Evento enviado!");
    this.eventoMostrar.emit(this.mostrarContenido);*/

   
    
  }

/*  dameUnaPelicula(numero: number):PeliculaModelo
  {
    return  this.servicioPeliculasService.dameUnaPelicula(numero);
   }*/

   dameTodasPeliculas():PeliculaModelo[]
   {
      this.listaDePelicula3= this.servicioPeliculasService.dameTodasPeliculas();
      return  this.listaDePelicula3;
  }

/*
ordenarPeliculas():PeliculaModelo[]
{

  return  this.servicioPeliculasService.ordenarPeliculas();

}*/
  ngOnInit() {
  }

}
