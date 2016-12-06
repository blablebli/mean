import { Component, OnInit } from '@angular/core';

import { ExternasPeliculasModelo } from '../modelo-peliculas/externas-peliculas-modelo';
import { Pelis2ExternasServiceExpressMongooseService } from '../pelis2-externas-service-express-mongoose.service';

@Component({
  selector: 'app-componente-externas-bbdd',
  templateUrl: './componente-externas-bbdd.component.html',
  styleUrls: ['./componente-externas-bbdd.component.css'],
  providers:[Pelis2ExternasServiceExpressMongooseService]
})
export class ComponenteExternasBbddComponent implements OnInit {

 private ExternasPelis: ExternasPeliculasModelo[];
  constructor(private service: Pelis2ExternasServiceExpressMongooseService) {
      this.service.getPelisExternas().subscribe((datos)=>{
          this.ExternasPelis = datos;
      },(error)=>{
          console.log("Error " + error);
      }),
      ()=>{
        console.log("Completada");
      }
   }

  ngOnInit() {
  }

}
