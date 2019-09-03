import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-maestro-detalle',
  templateUrl: './maestro-detalle.component.html',
  styleUrls: ['./maestro-detalle.component.css']
})
export class MaestroDetalleComponent implements OnInit {
  listadoUsuarios: Usuario[];
  constructor() {
    this.listadoUsuarios = new Array<Usuario>();
  }

  ngOnInit() {
  }

  procesarAltaUsuario(usuario: any) {
    this.listadoUsuarios.push(usuario);
    console.info(this.listadoUsuarios);
  }
}
