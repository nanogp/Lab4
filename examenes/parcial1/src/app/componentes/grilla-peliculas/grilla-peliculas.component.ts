import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-grilla-peliculas',
  templateUrl: './grilla-peliculas.component.html',
  styleUrls: ['./grilla-peliculas.component.css']
})
export class GrillaPeliculasComponent implements OnInit {
  @Input() listadoPeliculas: Array<Pelicula> = Array<Pelicula>();
  @Output() editarPelicula: EventEmitter<any> = new EventEmitter<any>();
  @Output() borrarPelicula: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  Editar(pelicula: Pelicula) {
    this.editarPelicula.emit(pelicula);
  }

  Borrar(pelicula: Pelicula) {
    this.borrarPelicula.emit(pelicula);
  }

}
