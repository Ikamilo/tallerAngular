import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Biblioteca } from '../models/biblioteca.model';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  biblioteca: Biblioteca;
  list: Biblioteca[];
  url = "http://localhost:9091/";

  constructor(private httpClient: HttpClient) { }

  post(biblioteca: Biblioteca) {
    return this.httpClient.post(this.url + "biblioteca", biblioteca);
  }

  put(biblioteca: Biblioteca) {
    return this.httpClient.put(this.url + "biblioteca", biblioteca);
  }

  getAll() {
    this.httpClient.get(this.url + "biblioteca").toPromise().then((res) => {
      this.list = res as Biblioteca[];
    });
  }

  delete(id: number) {
    return this.httpClient.delete(this.url + "biblioteca/delete/" + id);
  }
}
