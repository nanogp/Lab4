import { Component, OnInit } from '@angular/core';
import { TipoPelicula } from 'src/app/clases/tipo-pelicula.enum';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula: Pelicula = new Pelicula();
  public peliculaEditar: Pelicula = new Pelicula();
  public listadoPeliculas: Array<Pelicula> = Array<Pelicula>();
  public ultimoId = 100;

  public vista = 'grilla';
  public editar = false;
  public mostrarABM = true;

  constructor() { }

  ngOnInit() {
  }

  AgregarPelicula() {
    console.info(this.pelicula);
    const pelicula = new Pelicula();
    pelicula.id = this.getNewId();
    pelicula.nombre = this.pelicula.nombre;
    pelicula.tipo = this.pelicula.tipo;
    pelicula.fechaEstreno = this.pelicula.fechaEstreno;
    pelicula.cantidadPublico = this.pelicula.cantidadPublico;
    pelicula.foto = this.pelicula.foto;
    this.listadoPeliculas.push(pelicula);
    this.pelicula = new Pelicula();
  }

  GuardarEditar() {
    this.pelicula = new Pelicula();
    this.editar = false;
  }

  CancelarEditar() {
    this.pelicula.id = this.peliculaEditar.id;
    this.pelicula.nombre = this.peliculaEditar.nombre;
    this.pelicula.tipo = this.peliculaEditar.tipo;
    this.pelicula.fechaEstreno = this.peliculaEditar.fechaEstreno;
    this.pelicula.cantidadPublico = this.peliculaEditar.cantidadPublico;
    this.pelicula.foto = this.peliculaEditar.foto;
    this.pelicula = new Pelicula();
    this.editar = false;
  }

  CambiarVista(valor) {
    this.vista = valor;
  }

  EditarPelicula(pelicula) {
    this.peliculaEditar = new Pelicula();
    this.peliculaEditar.id = pelicula.id;
    this.peliculaEditar.nombre = pelicula.nombre;
    this.peliculaEditar.tipo = pelicula.tipo;
    this.peliculaEditar.fechaEstreno = pelicula.fechaEstreno;
    this.peliculaEditar.cantidadPublico = pelicula.cantidadPublico;
    this.peliculaEditar.foto = pelicula.foto;
    this.pelicula = pelicula;
    this.editar = true;
  }

  BorrarPelicula(pelicula) {
    const index = this.listadoPeliculas.indexOf(pelicula);
    this.listadoPeliculas.splice(index, 1);
    this.pelicula = new Pelicula();
  }

  getNewId() {
    this.ultimoId++;
    return this.ultimoId;
  }

  toggleABM() {
    switch (this.mostrarABM) {
      case true:
        this.mostrarABM = false;
        break;
      default:
        this.mostrarABM = true;
        break;
    }

  }
}
