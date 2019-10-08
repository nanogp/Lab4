import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttppeliculasService } from '../httppeliculas/httppeliculas.service';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttppeliculasService) { }

  BuscarTodos() {
    return this.http.httpGetO('all');
  }
}
