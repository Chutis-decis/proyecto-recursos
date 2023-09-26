import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/user/principal/principal.component';
import { NavvComponent } from './components/navv/navv.component';
import { AspiranteComponent } from './components/user/aspirante/aspirante.component';
import { NuevoAspiranteComponent } from './components/user/nuevo-aspirante/nuevo-aspirante.component';
import { AlumnoComponent } from './components/user/alumno/alumno.component';
import { AyudaComponent } from './components/user/ayuda/ayuda.component';
import { LoginComponent } from './components/admin/login/login.component';
import { PanelAdminComponent } from './components/admin/panel-admin/panel-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavvComponent,
    AspiranteComponent,
    NuevoAspiranteComponent,
    AlumnoComponent,
    AyudaComponent,
    LoginComponent,
    PanelAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
