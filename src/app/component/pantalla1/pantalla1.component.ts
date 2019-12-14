import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { BibliotecaService } from "../../services/biblioteca.service";
import { Biblioteca } from "../../models/biblioteca.model";

@Component({
  selector: 'app-pantalla1',
  templateUrl: './pantalla1.component.html',
  styleUrls: ['./pantalla1.component.css']
})
export class Pantalla1Component implements OnInit {

  constructor(private servicio: BibliotecaService) { }

  ngOnInit() {
    this.resetForm();
    this.servicio.getAll();
  }

  onSubmit(form: NgForm) {
    if (form.value.bibliotecaId == null) {
      this.post(form);
    } else {
      this.put(form);
    }
  }

  populateForm(biblioteca: Biblioteca) {
    this.servicio.biblioteca = biblioteca;
  }

  resetForm() {
    this.servicio.biblioteca = {
      bibliotecaId: null,
      nombre: "",
      direccion: "",
      telefono: ""
    }
  }

  post(form: NgForm) {
    this.servicio.post(form.value).toPromise().then(res => {
      this.resetForm();
      this.servicio.getAll();
    });
  }

  put(form: NgForm) {
    this.servicio.put(form.value).toPromise().then(res => {
      this.resetForm();
      this.servicio.getAll();
    });
  }

  delete(id: number) {
    this.servicio.delete(id).toPromise().then(res => {
      this.resetForm();
      this.servicio.getAll();
    });
  }
}
