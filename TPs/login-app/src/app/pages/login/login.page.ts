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

  constructor(private router: Router, private servicioLogin: LoginService) {
    this.usuario = new Usuario();
    this.mostrarError = false;
  }

  ngOnInit() { }

  loguearse() {
    this.loggear();

    if (this.servicioLogin.validar(this.usuario)) {
      this.router.navigateByUrl("/bienvenido");
    }
    else {
      this.mostrarError = true;
    }
  }

  loggear() {
    console.info(this.usuario);
  }
}