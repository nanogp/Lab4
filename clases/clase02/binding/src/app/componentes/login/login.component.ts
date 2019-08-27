import { Component, OnInit } from '@angular/core';

import { Usuario } from "../../clases/usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario;

  constructor() {
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  loggear() {
    console.info(this.usuario);
  }

}
