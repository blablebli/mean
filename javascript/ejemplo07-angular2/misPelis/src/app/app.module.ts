import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComponentePeliculasComponent } from './componente-peliculas/componente-peliculas.component';
import { PeliculasFilaComponent } from './peliculas-fila/peliculas-fila.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePeliculasComponent,
    PeliculasFilaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
 // bootstrap: [AppComponent]
  bootstrap: [AppComponent, ComponentePeliculasComponent]
    //bootstrap: [AppComponent/*, ComponentePeliculasComponent, PeliculasFilaComponent */]
})
export class AppModule { }
