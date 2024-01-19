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
import { DatosFtdComponent } from './components/admin/barra-opciones/datos-ftd/datos-ftd.component';
import { RegistroDatosFtdComponent } from './components/user/registro-aspirante/registro-datos-ftd/registro-datos-ftd.component';
import { WatchDatosFtdComponent } from './components/admin/panel/watch-datos-ftd/watch-datos-ftd.component';
import { FtdBajaComponent } from './components/admin/panel-admin/ftd-baja/ftd-baja.component';
import { EscolaresBajaComponent } from './components/admin/panel-admin/escolares-baja/escolares-baja.component';
import { UniversidadComponent } from './components/admin/barra-opciones/datos-escolares/universidad/universidad.component';
import { ModalidadEscolarComponent } from './components/admin/barra-opciones/datos-escolares/modalidad-escolar/modalidad-escolar.component';
import { PlanEducativoComponent } from './components/admin/barra-opciones/datos-escolares/plan-educativo/plan-educativo.component';
import { PerfilamientoComponent } from './components/admin/barra-opciones/datos-ingreso/perfilamiento/perfilamiento.component';
import { TramiteComponent } from './components/admin/barra-opciones/datos-ingreso/tramite/tramite.component';
import { ModalidadComponent } from './components/admin/barra-opciones/datos-ingreso/modalidad/modalidad.component';
import { BecaComponent } from './components/admin/barra-opciones/datos-ftd/beca/beca.component';
import { IngresoBajaComponent } from './components/admin/panel-admin/ingreso-baja/ingreso-baja.component';
import { GrupoComponent } from './components/admin/barra-opciones/datos-ftd/grupo/grupo.component';
import { TutorComponent } from './components/admin/barra-opciones/datos-ftd/tutor/tutor.component';
import { CursosComponent } from './components/admin/barra-opciones/datos-ftd/cursos/cursos.component';
import { LoginAlumnoComponent } from './components/alumno/login-alumno/login-alumno.component';
import { PanelAlumnoComponent } from './components/alumno/panel-alumno/panel-alumno.component';
import { PeriodoComponent } from './components/admin/barra-opciones/datos-escolares/periodo/periodo.component';
import { UnuversidadBajaComponent } from './components/admin/panel-admin/escolares-baja/unuversidad-baja/unuversidad-baja.component';
import { ModalidadEscolarBajaComponent } from './components/admin/panel-admin/escolares-baja/modalidad-escolar-baja/modalidad-escolar-baja.component';
import { PlanEducativoBajaComponent } from './components/admin/panel-admin/escolares-baja/plan-educativo-baja/plan-educativo-baja.component';
import { PeriodoBajaComponent } from './components/admin/panel-admin/escolares-baja/periodo-baja/periodo-baja.component';
import { PerfilamientoBajaComponent } from './components/admin/panel-admin/ingreso-baja/perfilamiento-baja/perfilamiento-baja.component';
import { TramiteBajaComponent } from './components/admin/panel-admin/ingreso-baja/tramite-baja/tramite-baja.component';
import { ModalidadBajaComponent } from './components/admin/panel-admin/ingreso-baja/modalidad-baja/modalidad-baja.component';
import { BecaBajaComponent } from './components/admin/panel-admin/ftd-baja/beca-baja/beca-baja.component';
import { GrupoBajaComponent } from './components/admin/panel-admin/ftd-baja/grupo-baja/grupo-baja.component';
import { TutorBajaComponent } from './components/admin/panel-admin/ftd-baja/tutor-baja/tutor-baja.component';
import { CursoBajaComponent } from './components/admin/panel-admin/ftd-baja/curso-baja/curso-baja.component';
import { DocumentDetailComponent } from './components/alumno/panel-alumno/document-detail/document-detail.component';
import { RevisionComponent } from './components/admin/barra-opciones/revision/revision.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: PrincipalComponent},
  {path:'aspirante', component: AspirantesComponent},
  {path: 'crear', component: RegistroAspiranteComponent},
  {path: 'ayuda', component:AyudaComponent},
  {path: 'login', component:LoginComponent },
  {path: "login-alumno", component: LoginAlumnoComponent},
  {path: "panel-alumno", component: PanelAlumnoComponent},
  {path: "admin", component: PanelAdminComponent},
  {path: 'detalles', component: WatchComponent},
  {path: 'detalle-escolares', component: WatchDatosEscolaresComponent},
  {path: 'estudiante/:id', component: RegistroAspiranteComponent},
  {path: 'datos-escolares', component: DatosEscolaresComponent},
  {path: 'datos-ftd', component: DatosFtdComponent},
  {path: 'dados-baja', component: PersonalesBajaComponent},
  {path: 'dados-baja-ftd', component: FtdBajaComponent},
  {path: 'dados-baja-escolares', component: EscolaresBajaComponent},
  {path: 'dados-baja-ingreso', component: IngresoBajaComponent},
  {path: 'registro-datos-escolares', component: RegistroDatosPersonalesComponent},
  {path: 'registro-datos-escolares/:id', component: RegistroDatosPersonalesComponent},
  {path: 'datos-ingreso', component: DatosIngresoComponent},
  {path: 'registro-datos-ingreso', component: RegistroDatosIngresoComponent},
  {path: 'registro-datos-ingreso/:id', component: RegistroDatosIngresoComponent},
  {path: 'registro-datos-ftd', component: RegistroDatosFtdComponent},
  {path: 'registro-datos-ftd/:id', component: RegistroDatosFtdComponent},
  {path: 'datos_ftd', component: DatosFtdComponent},
  {path: 'datos_ftd/:id', component: DatosFtdComponent},
  {path: 'datos-ftd/becas/:id', component: BecaComponent},
  {path: 'datos-ftd/becas', component: BecaComponent},
  {path: 'datos-ftd/grupo', component: GrupoComponent},
  {path: 'datos-ftd/grupo/:id', component: GrupoComponent},
  {path: 'datos-ftd/tutor/:id', component: TutorComponent},
  {path: 'datos-ftd/tutor', component: TutorComponent},
  {path: 'datos-ftd/cursos', component: CursosComponent},
  {path: 'datos-ftd/cursos/:id', component: CursosComponent},
  {path: 'detalle-ingreso', component: WatchDatosIngresoComponent},
  {path: 'detalle-ftd', component: WatchDatosFtdComponent},
  {path: 'datos-escolares/universidad', component: UniversidadComponent},
  {path: 'datos-escolares/universidad/:id', component: UniversidadComponent},
  {path: 'datos-escolares/modalidad-escolar', component: ModalidadEscolarComponent},
  {path: 'datos-escolares/modalidad-escolar/:id', component: ModalidadEscolarComponent},
  {path: 'datos-escolares/plan-educativo', component: PlanEducativoComponent},
  {path: 'datos-escolares/plan-educativo/:id', component: PlanEducativoComponent},
  {path: 'datos-ingreso/perfilamiento/:id', component: PerfilamientoComponent},
  {path: 'datos-ingreso/perfilamiento', component: PerfilamientoComponent},
  {path: 'datos-ingreso/tramite/:id', component: TramiteComponent},
  {path: 'datos-ingreso/tramite', component: TramiteComponent},
  {path: 'datos-ingreso/modalidad', component: ModalidadComponent},
  {path: 'datos-ingreso/modalidad/:id', component: ModalidadComponent},
  {path: 'datos-ingreso/modalidad/:id', component: BecaComponent},
  {path: 'datos-ingreso/modalidad/', component: BecaComponent},
  {path: 'datos-escolares/periodo', component: PeriodoComponent},
  {path: 'datos-escolares/periodo/:id', component: PeriodoComponent},
  {path: 'baja-universidad', component: UnuversidadBajaComponent},
  {path: 'baja-universidad/:id', component: UnuversidadBajaComponent},
  {path: 'baja-modalidad-escolar', component: ModalidadEscolarBajaComponent},
  {path: 'baja-plan-educativo', component: PlanEducativoBajaComponent},
  {path: 'baja-periodo', component: PeriodoBajaComponent},
  {path: 'baja-perfilamiento', component: PerfilamientoBajaComponent},
  {path: 'baja-tramite', component: TramiteBajaComponent},
  {path: 'baja-modalidad', component: ModalidadBajaComponent},
  {path: 'baja-beca', component: BecaBajaComponent},
  {path: 'baja-grupo', component: GrupoBajaComponent},
  {path: 'baja-tutor', component: TutorBajaComponent},
  {path: 'baja-curso', component: CursoBajaComponent},
  { path: 'documents/:id', component: DocumentDetailComponent },
  { path: 'revision', component: RevisionComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
