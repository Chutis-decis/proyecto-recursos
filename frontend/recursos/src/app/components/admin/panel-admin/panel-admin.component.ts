import { Component, OnInit } from '@angular/core';
import { CPanel } from './CPanel';
import { AlumnoService } from 'src/app/service/alumno/alumno.service';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {

  /* Atributo */
  alumno: CPanel[];

  /* Constructor */
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.getAlumnos();
  }

  private getAlumnos(){
    this.alumnoService.obtenerAlumnos().subscribe(data => {
      this.alumno = data;
    });
  }

}
