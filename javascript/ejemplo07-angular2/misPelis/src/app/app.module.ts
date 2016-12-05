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


@NgModule({
  declarations: [
    AppComponent,
    ComponentePeliculasComponent,
    PeliculasFilaComponent,
    ComponenteHomeComponent,
    ComponenteExternasPelisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
 // bootstrap: [AppComponent]
 bootstrap: [AppComponent, ComponentePeliculasComponent]
    //bootstrap: [AppComponent/*, ComponentePeliculasComponent, PeliculasFilaComponent */]
})
export class AppModule { }
