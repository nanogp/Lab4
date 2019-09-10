import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-maestro-detalle',
  templateUrl: './maestro-detalle.component.html',
  styleUrls: ['./maestro-detalle.component.css']
})
export class MaestroDetalleComponent implements OnInit {
  listadoUsuarios: Usuario[];
  usuarioMaestroDetalle: Usuario;
  accionMaestroDetalle: String;

  constructor() {
    this.listadoUsuarios = new Array<Usuario>();
  }

  ngOnInit() { }

  procesarAltaUsuario($event) {
    this.listadoUsuarios.push($event);
    console.info(this.listadoUsuarios);
  }

  procesarSeleccion($event) {
    this.usuarioMaestroDetalle = $event;
  }

  procesarAccion($event) {
    this.accionMaestroDetalle = $event;
  }
}
