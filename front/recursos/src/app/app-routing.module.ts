import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/user/principal/principal.component';
import { NuevoAspiranteComponent } from './components/user/nuevo-aspirante/nuevo-aspirante.component';
import { AspiranteComponent } from './components/user/aspirante/aspirante.component';
import { AyudaComponent } from './components/user/ayuda/ayuda.component';
import { LoginComponent } from './components/admin/login/login.component';
import { PanelAdminComponent } from './components/admin/panel-admin/panel-admin.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component:  PrincipalComponent},
  {path: "aspirante", component: NuevoAspiranteComponent},
  {path: "alumno", component:AspiranteComponent},
  {path: "login", component:LoginComponent},
  {path: "admin", component:PanelAdminComponent},
  {path: "ayuda", component:AyudaComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
