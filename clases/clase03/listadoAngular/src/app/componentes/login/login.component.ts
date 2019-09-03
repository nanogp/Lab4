import { Component, OnInit } from '@angular/core';

import { Usuario } from "../../clases/usuario";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
  usuarioOk: Usuario;
  mostrarError: boolean;

  constructor(private router: Router) {
    this.usuario = new Usuario();
    this.usuarioOk = new Usuario("u", "u");
    this.mostrarError = false;
  }

  ngOnInit() { }

  loguearse() {
    this.loggear();

    if (this.usuario.nombre == this.usuarioOk.nombre && this.usuario.clave == this.usuarioOk.clave) {
      this.router.navigateByUrl("/bienvenido");
    }
    this.mostrarError = true;
  }

  loggear() {
    console.info(this.usuario);
  }

}
