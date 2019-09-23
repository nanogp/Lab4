import { Injectable } from '@angular/core';
import { Usuario } from "src/app/clases/usuario";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuarioOk: Usuario = new Usuario();

  constructor() { }

  validar(usuario: Usuario) {
    if (usuario.nombre == this.usuarioOk.nombre && usuario.clave == this.usuarioOk.clave) {
      return true;
    } else {
      return false;
    }
  }
}

