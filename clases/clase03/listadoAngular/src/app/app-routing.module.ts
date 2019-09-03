import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./componentes/login/login.component";
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/error/error.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { AbmusuarioComponent } from './componentes/abmusuario/abmusuario.component';
import { MaestroDetalleComponent } from './componentes/maestro-detalle/maestro-detalle.component';


const routes: Routes = [
  { path: '', component: MaestroDetalleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'abm', component: AbmusuarioComponent },
  { path: 'm-d', component: MaestroDetalleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
