import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { NuevoAlumnoComponent } from './components/nuevo-alumno/nuevo-alumno.component';
import { AspiranteComponent } from './components/aspirante/aspirante.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { LoginComponent } from './components/admin/login/login.component';
import { PanelAdministracionComponent } from './components/admin/panel-administracion/panel-administracion.component';
import { LoginAlumnoComponent } from './components/login-alumno/login-alumno.component';


//Componentes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component:  PrincipalComponent},
  {path: 'aspirante', component: NuevoAlumnoComponent},
  {path: 'alumno', component: AspiranteComponent},
  {path: 'ayuda', component: AyudaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: PanelAdministracionComponent},
  {path: "login-alumno", component: LoginAlumnoComponent},

  /* Este wilcard nos servira para cuando este mal la ruta */
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
