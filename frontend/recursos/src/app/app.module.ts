import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/user/principal/principal.component';
import { AspirantesComponent } from './components/user/aspirantes/aspirantes.component';
import { NavvComponent } from './components/nav/navv/navv.component';

import { AyudaComponent } from './components/user/ayuda/ayuda.component';
import { LoginComponent } from './components/admin/login/login.component';
import { PanelAdminComponent } from './components/admin/panel-admin/panel-admin.component';
import { BarraOpcionesComponent } from './components/admin/barra-opciones/barra-opciones.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WatchComponent } from './components/admin/panel/watch/watch.component';
import { EditarComponent } from './components/admin/panel/editar/editar.component';
import { RegistroAspiranteComponent } from './components/user/registro-aspirante/registro-aspirante.component';
import { EliminarComponent } from './components/admin/panel/eliminar/eliminar.component';
import { DatosEscolaresComponent } from './components/admin/barra-opciones/datos-escolares/datos-escolares.component';
import { RegistroDatosPersonalesComponent } from './components/user/registro-aspirante/registro-datos-personales/registro-datos-personales.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    AspirantesComponent,
    NavvComponent,
    AyudaComponent,
    LoginComponent,
    PanelAdminComponent,
    BarraOpcionesComponent,
    WatchComponent,
    EditarComponent,
    RegistroAspiranteComponent,
    EliminarComponent,
    DatosEscolaresComponent,
    RegistroDatosPersonalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
