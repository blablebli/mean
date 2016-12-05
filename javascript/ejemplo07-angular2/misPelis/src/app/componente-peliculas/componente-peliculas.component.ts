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

  private peliNueva: PeliculaModelo;

   private eventoMostrar: EventEmitter<boolean> = new EventEmitter<boolean>();
     private eventoMostrar2: EventEmitter<PeliculaModelo[]> = new EventEmitter<PeliculaModelo[]>();
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


    this.peliNueva = new PeliculaModelo ("","");


    }


enviarFormulario(formulario: any){
  console.log("Datos del formulario enviardo" + formulario);//le pongo la variable q le paso en la funcion
  // q es formulario
  //Pongo para q me devuelva el valor del libro q le estoy devolviendo 
  console.log("Nueva peli:"+this.peliNueva);
  //this.peliNueva = new PeliculaModelo ("","");
  //6ºº9 me voy al index.html y pongo el selector
  //7º en el app.modul.ts le pongo en el botstarp FormularioCo0mponent 

//8º) Pnogo en el modelo el campo titulo publico para una prueba de cogerlo desde aqui
///Veo q es two way pq lo tengo linkado en el formulario despues de hacerle en component el new Libro y lo q
//cambio en la vista html de formulario lo guarda cuando le doy al boton enviar en el modelo 
// y tambien veo que por otro laod lo si lo hago desde el component tambien se me refleja en el formulario.
    //this.libro.titulo = "Otro";//  se lo paso hardcodeado de forma que despuesd e pasarle el valor
     this.peliNueva.titulo =formulario.titulo; // podia pasarle del formulario el campo del titulo pero en realidad no hace falta
     this.peliNueva.autor=formulario.autor;
     this.peliNueva.sinopsis=formulario.sinopsis;
     this.listaDePelicula2.push(this.peliNueva);
  }


 enviarNotificacion(campoOrdenar:number):void{

   this.eventoMostrar3.emit(this.mostrarContenido3());
   this.eventoMostrar2.emit(this.inversoPeliculasArray(campoOrdenar));
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

   inversoPeliculasArray(campoOrdenar:number):PeliculaModelo[]
   {
      this.listaDePelicula2= this.servicioPeliculasService.inversoPeliculasArray(campoOrdenar);
      return  this.listaDePelicula2;
  }

/*
ordenarPeliculas():PeliculaModelo[]
{

  return  this.servicioPeliculasService.ordenarPeliculas();

}*/
  ngOnInit() {
  }

}
