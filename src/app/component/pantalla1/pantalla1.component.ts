import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../models/usuario.model";

@Component({
  selector: 'app-pantalla1',
  templateUrl: './pantalla1.component.html',
  styleUrls: ['./pantalla1.component.css']
})
export class Pantalla1Component implements OnInit {

  constructor() { }

  usuarios: Usuario[] = [
    {
      nombre : "Camilo Triana",
      edad : 21,
      correoInstitucional : "camilo@correo.com"
    },
    {
      nombre : "Zairi Pineda",
      edad : 20,
      correoInstitucional : "zairi@correo.com"
    },
    {
      nombre : "Geoffrey Soto",
      edad : 18,
      correoInstitucional : "geoffrey@correo.com"
    },
    {
      nombre : "Angie Fandiño",
      edad : 21,
      correoInstitucional : "angie@correo.com"
    }
  ];

  ngOnInit() {
  }

  mostrar:boolean = true;

  pruebBooleana(valor:boolean){
    this.mostrar = valor;
  }
}
