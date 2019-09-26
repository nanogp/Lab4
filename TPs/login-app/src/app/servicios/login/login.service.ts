import { Injectable } from '@angular/core';
import { Usuario } from "src/app/clases/usuario";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  listaUsuariosPrueba: Array<Usuario>;

  constructor() {
    this.listaUsuariosPrueba = new Array<Usuario>();
    this.listaUsuariosPrueba.push(new Usuario("admin", "admin"));
    this.listaUsuariosPrueba.push(new Usuario("user", "user"));
    this.listaUsuariosPrueba.push(new Usuario("dummy", "dummy"));
  }

  validar(usuario: Usuario) {
    let retorno: boolean = false;
    this.listaUsuariosPrueba
      .forEach((dato) => {
        if (usuario.nombre == dato.nombre && usuario.clave == dato.clave) {
          retorno = true;
        }
      });

    return retorno;
  }
}