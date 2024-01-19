import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-opciones',
  templateUrl: './barra-opciones.component.html',
  styleUrls: ['./barra-opciones.component.css']
})
export class BarraOpcionesComponent {
  /* Constructor */
  constructor(private router: Router) { this.router = router }

  inicio() {
    this.router.navigate(['/admin']);
  }

  datos_escolares(){
    this.router.navigate(['/datos-escolares']);
  }

  dados_baja(){
    this.router.navigate(['/dados-baja']);
  }

  datos_ingreso(){
    this.router.navigate(['/datos-ingreso']);
  }

  datos_ftd(){
    this.router.navigate(['/datos-ftd']);
  }

  datos_personales(){
    this.router.navigate(['/admin']);
  }

  datos_baja_ftd(){
    this.router.navigate(['/dados-baja-ftd']);
  }

  dados_baja_escolares(){
    this.router.navigate(['/dados-baja-escolares']);
  }

  dados_baja_ingreso(){
    this.router.navigate(['/dados-baja-ingreso']);
  }

  universidad(){
    this.router.navigate(['/datos-escolares/universidad']);
  }

  modalidadEscolar(){
    this.router.navigate(['/datos-escolares/modalidad-escolar']);
  }

  plan_educativo(){
    this.router.navigate(['/datos-escolares/plan-educativo']);
  }

  perfilamiento(){
    this.router.navigate(['/datos-ingreso/perfilamiento']);
  }

  tramite(){
    this.router.navigate(['/datos-ingreso/tramite']);
  }

  modalidad(){
    this.router.navigate(['/datos-ingreso/modalidad']);
  }

  beca(){
    this.router.navigate(['/datos-ftd/becas']);
  }

  grupo(){
    this.router.navigate(['/datos-ftd/grupo']);
  }

  tutor(){
    this.router.navigate(['/datos-ftd/tutor']);
  }

  curso(){
    this.router.navigate(['/datos-ftd/cursos']);
  }

  periodo(){
    this.router.navigate(['/datos-escolares/periodo']);
  }

  baja_universidad(){
    this.router.navigate(['/baja-universidad']);
  }
  baja_modalidad_escolar(){
    this.router.navigate(['/baja-modalidad-escolar']);
  }

  baja_plan_educativo(){
    this.router.navigate(['/baja-plan-educativo']);
  }

  baja_periodo(){
    this.router.navigate(['/baja-periodo']);
  }

  baja_perfilamiento(){
    this.router.navigate(['/baja-perfilamiento']);
  }

  baja_tramite(){
    this.router.navigate(['/baja-tramite']);
  }

  baja_modalidad(){
    this.router.navigate(['/baja-modalidad']);
  }

  baja_beca(){
    this.router.navigate(['/baja-beca']);
  }

  baja_grupo(){
    this.router.navigate(['/baja-grupo']);
  }

  baja_tutor(){
    this.router.navigate(['/baja-tutor']);
  }

  baja_curso(){
    this.router.navigate(['/baja-curso']);
  }

  revision(){
    this.router.navigate(['/revision']);
  }
}
