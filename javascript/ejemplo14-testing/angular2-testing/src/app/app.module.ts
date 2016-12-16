import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Ejemp01baseComponent } from './ejemp01base/ejemp01base.component';
import { Ejemp02InputComponent } from './ejemp02-input/ejemp02-input.component';
import { Ejemp03ProviderComponent } from './ejemp03-provider/ejemp03-provider.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejemp01baseComponent,
    Ejemp02InputComponent,
    Ejemp03ProviderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
