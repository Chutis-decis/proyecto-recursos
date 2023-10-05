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

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    AspirantesComponent,
    NavvComponent,
    AyudaComponent,
    LoginComponent,
    PanelAdminComponent,
    BarraOpcionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
