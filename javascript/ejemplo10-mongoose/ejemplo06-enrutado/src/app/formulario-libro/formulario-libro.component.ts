import { Component, OnInit } from '@angular/core';
//paso final necesito el  route q es el enrutador no quiero el ActivatedRoute q es la ruta actual esa no la quier
import {Router} from '@angular/router';

//para importar libro
import {Libro} from '../libro';
// paraimporta el servicio
import{BibliotecaService} from '../biblioteca.service'

@Component({
  selector: 'app-formulario-libro',
  templateUrl: './formulario-libro.component.html',
  styleUrls: ['./formulario-libro.component.css'],
  //como lamo a un servicio necesito un provider
  providers:[BibliotecaService]
})
export class FormularioLibroComponent implements OnInit {
private libro: Libro;
//le añado el servicio en el contr
    //Además le paso al constructor para poder rediriger el router
    //luego ene l servicio con los datos q le he paso
  constructor(private service:BibliotecaService,  private router: Router) {

  
   }

  ngOnInit() {
    this.libro = new Libro(null,"");// Creo el libro vacio sin id de valor

  }

    //me queda definir el metorod del formulario q le digo q recibe formulario q es de tipo cualquiera
eviarFormulario(formulario:any)
{
  console.log(this.libro);// para v er q le lleba el servici
  this.service.addLibro(this.libro)
  .subscribe((
    (datos)=> 
    {
      //tengo los datos lo opngo
        console.log("Libro gruardado" + datos.id);
        this.router.navigateByUrl("/listar"); 
    }, 
    (error)=> 
    {
      console.error("error");
    },
    //3 funcion para decir lo q quieo q haba cuando termine
    ()=>{
      console.log("fin");
    } 
  ));
    //this.router.navigateByUrl("/listar") // le digo q cuando acabo lo redirige
}
}
