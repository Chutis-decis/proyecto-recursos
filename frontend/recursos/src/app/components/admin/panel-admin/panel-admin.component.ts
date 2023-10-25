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

  /* Atributos para el crud */
  id = 0;
  nombres: FormControl = new FormControl('');
  primerApellido: FormControl = new FormControl('');
  segundoApellido: FormControl = new FormControl('');
  genero: FormControl = new FormControl('');
  curp: FormControl = new FormControl('');
  estado: FormControl = new FormControl('');
  ciudad: FormControl = new FormControl('');
  colonia: FormControl = new FormControl('');
  calle: FormControl = new FormControl('');
  numeroExterior: FormControl = new FormControl('');
  numeroInterior: FormControl = new FormControl('');
  extra: FormControl = new FormControl('');
  celular: FormControl = new FormControl('');
  telefono: FormControl = new FormControl('');
  correoPersonal: FormControl = new FormControl('');
  activo: FormControl = new FormControl('');


  /* Constructor */
  constructor(private alumnoService: AlumnoService, private rout: Router, private activatedRouter: ActivatedRoute) {this.rout = rout; }
  
  /* Metodos para el crud */
  ngOnInit(): void {
    this.getAlumnos();
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

  getStudent(id: number): void{
    this.alumnoService.getById(id).subscribe(data => {
      console.log("Alumno editado", data);
      this.nombres.setValue(data.nombres);
    });
  }
}
