import { Component, OnInit } from '@angular/core';

import { ExternasPeliculasModelo } from '../modelo-peliculas/externas-peliculas-modelo';
import { PelisExternasServiceService } from '../pelis-externas-service.service';
                                                
@Component({
  selector: 'app-componente-externas-pelis',
  templateUrl: './componente-externas-pelis.component.html',
  styleUrls: ['./componente-externas-pelis.component.css'],
  providers:[PelisExternasServiceService]
})
export class ComponenteExternasPelisComponent implements OnInit {
  constructor(){};
 /*private ExternasPelis: ExternasPeliculasModelo[];
  constructor(private service: PelisExternasServiceService) {
      this.service.getPelisExternas().subscribe((datos)=>{
          this.ExternasPelis = datos;
      },(error)=>{
          console.log("Error " + error);
      }),
      ()=>{
        console.log("Completada");
      }
   }*/

  ngOnInit() {
  }

}

