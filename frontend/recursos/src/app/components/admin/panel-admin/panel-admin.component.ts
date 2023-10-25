import { Component, OnInit } from '@angular/core';
import { CPanel } from '../CPanel';
import { AlumnoService } from 'src/app/service/alumno/alumno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {

  /* Atributo */
  alumno: CPanel[];
  estudiante : CPanel = new CPanel();


  /* Constructor */
  constructor(private alumnoService: AlumnoService, private rout: Router, private activatedRouter: ActivatedRoute) {this.rout = rout; }
  
  /* Metodos para el crud */
  ngOnInit(): void {
    this.getAlumnos();
    this.cargar();
  }

  /* Obtencion de los alumnos */
  private getAlumnos(){
    this.alumnoService.obtenerAlumnos().subscribe(data => {
      this.alumno = data;
    });
  }

  /* Eliminacion de los alumnos */
  deleteEstudiante(id: number): void{
    this.alumnoService.deleted(id).subscribe(data => {
      console.log("Alumno eliminado", data);
      this.getAlumnos();
    });
  }

  /* Metodo de ver la informacion del alumno alumno */
  verInfo(){
    this.rout.navigate(['/seeInformacion']);
  }

  /* Editar */

  cargar(){
    this.activatedRouter.params.subscribe(e => {
      let id = e['id'];
      if(id){
        this.alumnoService.getById(id).subscribe(data => this.estudiante=data);
      }
    });
  }
}
