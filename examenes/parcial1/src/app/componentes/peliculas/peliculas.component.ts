import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})

export class PeliculasComponent implements OnInit {
  public peliculas = [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.peliculasService.BuscarTodos().subscribe((element) => {
      this.peliculas = element.results;
    });

    console.info(this.peliculas);
  }

}