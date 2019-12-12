import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pantalla1Component } from './component/pantalla1/pantalla1.component';
import { Pantalla2Component } from './component/pantalla2/pantalla2.component';
import { Pantalla3Component } from './component/pantalla3/pantalla3.component';


const routes: Routes = [
  {path:"", component:Pantalla1Component},
  {path:"pantalla2", component:Pantalla2Component},
  {path:"pantalla3", component:Pantalla3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
