import { Component, OnInit } from '@angular/core';
import { CPanel } from '../../CPanel';
import { AlumnoService } from 'src/app/service/alumno/alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personales-baja',
  templateUrl: './personales-baja.component.html',
  styleUrls: ['./personales-baja.component.css']
})
export class PersonalesBajaComponent implements OnInit{
  alumno: CPanel[];
  alumnos: CPanel = new CPanel();
  searchTerm: string = ''

  constructor(private serviceAlumno: AlumnoService, private route: Router) { }

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos(){
    this.serviceAlumno.obtenerAlumnos().subscribe(data => {
      this.alumno = data;
    });
  }

  getAlumno(): void{
    if(this.alumnos.activo == false){
      this.getAlumnos();
    }
    this.route.navigate(['/detalles']);
  }
  
  /* Eliminacion de los alumnos */
  deleteEstudiante(id: number): void{
    this.serviceAlumno.deletedTrue(id).subscribe(data => {
      console.log("Alumno eliminado", data);
      this.getAlumnos();
    });
  }

}
