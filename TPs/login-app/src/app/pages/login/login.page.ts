import { Component, OnInit } from '@angular/core';

import { Usuario } from "../../clases/usuario";
import { Router } from '@angular/router';
import { LoginService } from "src/app/servicios/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: Usuario;
  usuarioOk: Usuario;
  mostrarError: boolean;
  debug: boolean = true; //para mostrar el FAB de usuarios de prueba

  constructor(private router: Router, private servicioLogin: LoginService) {
    this.inicializar();
  }

  ngOnInit() { }

  inicializar() {
    this.usuario = new Usuario("", "");
    this.mostrarError = false;
  }

  loguearse() {
    if (this.servicioLogin.validar(this.usuario)) {
      this.router.navigateByUrl("/bienvenido");
      this.inicializar();
    }
    else {
      this.mostrarError = true;
    }
  }

  llenar(u) {
    this.inicializar();
    this.usuario.nombre = u;
    this.usuario.clave = u;
  }

  consola(d) {
    console.info(d);
  }
}