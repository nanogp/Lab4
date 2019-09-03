import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-abmusuario',
  templateUrl: './abmusuario.component.html',
  styleUrls: ['./abmusuario.component.css']
})
export class AbmusuarioComponent implements OnInit {
  @Output() hayUsuarioNuevo: EventEmitter<any> = new EventEmitter<any>();
  nombre: string;
  clave: string;

  constructor() { }

  ngOnInit() { }

  add(): void {
    this.hayUsuarioNuevo.emit(new Usuario(this.nombre, this.clave));
  }

}
