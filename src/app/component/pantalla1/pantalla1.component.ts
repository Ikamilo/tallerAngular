import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-pantalla1',
  templateUrl: './pantalla1.component.html',
  styleUrls: ['./pantalla1.component.css']
})
export class Pantalla1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombre:string;
  edad:number;
  correoInstitucional:string;

  onSubmit(form:NgForm){
    console.log(form.value);
  }
}
