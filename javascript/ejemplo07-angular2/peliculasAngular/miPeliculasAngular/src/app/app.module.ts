import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { ComponentePeliculasComponent } from './componente-peliculas/componente-peliculas.component';

@NgModule({
  declarations: [
    AppComponent/*,
    ComponentePeliculasComponent*/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent/*, ComponentePeliculasComponent*/]
})
export class AppModule { }
