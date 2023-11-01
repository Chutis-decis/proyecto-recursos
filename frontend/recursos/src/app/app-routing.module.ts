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
import { RegistroDatosPersonalesComponent } from './components/user/registro-aspirante/registro-datos-personales/registro-datos-personales.component';
import { WatchDatosEscolaresComponent } from './components/admin/panel/watch-datos-escolares/watch-datos-escolares.component';
import { DatosIngresoComponent } from './components/admin/barra-opciones/datos-ingreso/datos-ingreso.component';
import { RegistroDatosIngresoComponent } from './components/user/registro-aspirante/registro-datos-ingreso/registro-datos-ingreso.component';
import { WatchDatosIngresoComponent } from './components/admin/panel/watch-datos-ingreso/watch-datos-ingreso.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: PrincipalComponent},
  {path:'aspirante', component: AspirantesComponent},
  {path: 'crear', component: RegistroAspiranteComponent},
  {path: 'ayuda', component:AyudaComponent},
  {path: 'login', component:LoginComponent },
  {path: "admin", component: PanelAdminComponent},
  {path: 'detalles', component: WatchComponent},
  {path: 'detalle-escolares', component: WatchDatosEscolaresComponent},
  {path: 'estudiante/:id', component: RegistroAspiranteComponent},
  {path: 'datos-escolares', component: DatosEscolaresComponent},
  {path: 'dados-baja', component: PersonalesBajaComponent},
  {path: 'registro-datos-escolares', component: RegistroDatosPersonalesComponent},
  {path: 'registro-datos-escolares/:id', component: RegistroDatosPersonalesComponent},
  {path: 'datos-ingreso', component: DatosIngresoComponent},
  {path: 'registro-datos-ingreso', component: RegistroDatosIngresoComponent},
  {path: 'registro-datos-ingreso/:id', component: RegistroDatosIngresoComponent},
  {path: 'detalle-ingreso', component: WatchDatosIngresoComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
