import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/user/principal/principal.component';
import { AspirantesComponent } from './components/user/aspirantes/aspirantes.component';
import { AyudaComponent } from './components/user/ayuda/ayuda.component';
import { LoginComponent } from './components/admin/login/login.component';
import { PanelAdminComponent } from './components/admin/panel-admin/panel-admin.component';
import { WatchComponent } from './components/admin/panel/watch/watch.component';
import { RegistroAspiranteComponent } from './components/user/registro-aspirante/registro-aspirante.component';
import { DatosEscolaresComponent } from './components/admin/barra-opciones/datos-escolares/datos-escolares.component';
import { PersonalesBajaComponent } from './components/admin/panel-admin/personales-baja/personales-baja.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: PrincipalComponent},
  {path:'aspirante', component: AspirantesComponent},
  {path: 'crear', component: RegistroAspiranteComponent},
  {path: 'ayuda', component:AyudaComponent},
  {path: 'login', component:LoginComponent },
  {path: "admin", component: PanelAdminComponent},
  {path: 'seeInformacion', component: WatchComponent},
  {path: 'estudiante/:id', component: RegistroAspiranteComponent},
  {path: 'datos-escolares', component: DatosEscolaresComponent},
  {path: 'detalles/:id', component: WatchComponent},
  {path: 'dados-baja', component: PersonalesBajaComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
