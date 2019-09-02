import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './componentes/login/login.component#LoginComponent' },
  { path: 'bienvenido', loadChildren: './componentes/bienvenido/bienvenido.component#BienvenidoComponent' },
  { path: 'error', loadChildren: './componentes/error/error.component#ErrorComponent' },
  // { path: '', loadChildren: () => import('./componentes/login/login.component').then(m => m.LoginComponent) },
  // { path: 'login', component: LoginComponent },
  // { path: 'bienvenido', component: BienvenidoComponent },
  // { path: 'error', component: ErrorComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
