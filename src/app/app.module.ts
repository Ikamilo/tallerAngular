import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pantalla1Component } from './component/pantalla1/pantalla1.component';
import { Pantalla2Component } from './component/pantalla2/pantalla2.component';
import { Pantalla3Component } from './component/pantalla3/pantalla3.component';

@NgModule({
  declarations: [
    AppComponent,
    Pantalla1Component,
    Pantalla2Component,
    Pantalla3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
