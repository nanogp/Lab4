import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from "../../clases/usuario";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  @Input() listadoUsuarios: Usuario[];

  constructor() {
    /* this.listado = new Array();
    this.listado.push(new Usuario('jose', '123'));
    this.listado.push(new Usuario('pedro', '456'));
    this.listado.push(new Usuario('qwerty', '789')); */
  }

  ngOnInit() {

  }

}
