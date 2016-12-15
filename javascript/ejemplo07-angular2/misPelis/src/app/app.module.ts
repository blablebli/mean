import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ComponentePeliculasComponent } from './componente-peliculas/componente-peliculas.component';
import { PeliculasFilaComponent } from './peliculas-fila/peliculas-fila.component';
import { ComponenteHomeComponent } from './componente-home/componente-home.component';
import { ComponenteExternasPelisComponent } from './componente-externas-pelis/componente-externas-pelis.component';
import { AppRoutes } from './app.routes';
import { AppRoutes2EnlacesDentroComponente} from './app.routes';
import { ComponentePeliculasBbddComponent } from './componente-peliculas-bbdd/componente-peliculas-bbdd.component';
import { ComponenteExternasBbddComponent } from './componente-externas-bbdd/componente-externas-bbdd.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
//Pedro añadido para el tema del login
import { PermisoAccesoService } from './permiso-acceso.service';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentePeliculasComponent,
    PeliculasFilaComponent,
    ComponenteHomeComponent,
    ComponenteExternasPelisComponent,
    ComponentePeliculasBbddComponent,
    ComponenteExternasBbddComponent,
    ChatComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   RouterModule.forRoot(AppRoutes)
  ],
 // providers: [],
 //añadido para el tema del login
 providers: [PermisoAccesoService
  //  provider: 'PermisoAccesoService',
/*useValue: () => {
      return true;
    }*/
  ],
  bootstrap: [AppComponent]
 //
// bootstrap: [AppComponent, ComponenteExternasPelisComponent]
    //bootstrap: [AppComponent/*, ComponentePeliculasComponent, PeliculasFilaComponent */]
})
export class AppModule { }
