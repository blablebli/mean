import { Component, OnInit } from '@angular/core';
import { PassportService } from '../passport.service';
//1ºservicio importo el servicio de modelo
import { ExternasPeliculasModelo } from '../modelo-peliculas/externas-peliculas-modelo';

//para el login
import { Pelis2ExternasServiceExpressMongooseService } from '../pelis2-externas-service-express-mongoose.service';

@Component({
  selector: 'app-componente-externas-bbdd',
  templateUrl: './componente-externas-bbdd.component.html',
  styleUrls: ['./componente-externas-bbdd.component.css'],
  //2º servicio aqui añado los2 providers
  providers:[Pelis2ExternasServiceExpressMongooseService, PassportService]
})
export class ComponenteExternasBbddComponent implements OnInit {

 private ExternasPelis: ExternasPeliculasModelo[];
 //3 inyecto el servicio en el constructor para poder usarlo
  constructor(private servicioPelis2ExternasServiceExpressMongoose: Pelis2ExternasServiceExpressMongooseService,
              private service: PassportService) {
                //4ºaqui lo utilizo el servicio del modelo
      this.servicioPelis2ExternasServiceExpressMongoose.getPelisExternas().subscribe((datos)=>{
          this.ExternasPelis = datos;
      },(error)=>{
          console.log("Error " + error);
      }),
      ()=>{
        console.log("Completada");
      }
   }

  ngOnInit() {
    //5º meto aqui en el inicio q compruebe si esta logeado antes de nada
     this.service.getMemberInfo().subscribe((data)=>{
      console.log(data);
       })
  }

}
