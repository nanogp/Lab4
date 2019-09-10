import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-abmusuario',
  templateUrl: './abmusuario.component.html',
  styleUrls: ['./abmusuario.component.css']
})
export class AbmusuarioComponent implements OnInit {
  @Output() hayUsuarioNuevo: EventEmitter<any> = new EventEmitter<any>();
  @Input() usuarioABM: Usuario;
  @Input() accionABM: String;

  hacerAlta: boolean;
  hacerBaja: boolean;
  hacerMod: boolean;

  nombre: string;
  clave: string;

  constructor() { }

  ngOnInit() {
    this.usuarioABM = new Usuario();
    switch (this.accionABM) {
      case 'A':
        this.hacerAlta = true;
        this.hacerBaja = false;
        this.hacerMod = false;
        break;

      case 'B':
        this.hacerAlta = false;
        this.hacerBaja = true;
        this.hacerMod = false;
        break;

      case 'M':
        this.hacerAlta = false;
        this.hacerBaja = false;
        this.hacerMod = true;
        break;
    }
  }

  add(): void {
    this.hayUsuarioNuevo.emit(new Usuario(this.usuarioABM.nombre, this.usuarioABM.clave));
    this.usuarioABM = new Usuario();
  }

}
