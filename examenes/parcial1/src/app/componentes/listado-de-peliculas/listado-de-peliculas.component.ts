import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-listado-de-peliculas',
  templateUrl: './listado-de-peliculas.component.html',
  styleUrls: ['./listado-de-peliculas.component.css']
})
export class ListadoDePeliculasComponent implements OnInit {


  @Input() listadoPeliculas: Array<Pelicula> = Array<Pelicula>();
  @Output() editarPelicula: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  Editar(usuario: Pelicula) {
    this.editarPelicula.emit(usuario);
  }
}
