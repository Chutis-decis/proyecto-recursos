import { Component, OnInit } from '@angular/core';
import { CPanel } from '../../CPanel';
import { AlumnoService } from 'src/app/service/alumno/alumno.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { error } from 'pdf-lib';
@Component({
  selector: 'app-personales-baja',
  templateUrl: './personales-baja.component.html'
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
  /* Eliminacion de los alumnos */
  deleteEstudiante(alumno: CPanel): void{
    Swal.fire({
      title: '¿Estas seguro?',
      text: `¿Seguro que desea dar de alta al alumno ${alumno.nombres} ${alumno.primerApellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, dalo de alta',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if(result.value){
        this.serviceAlumno.deletedTrue(alumno).subscribe(
          response => {
            this.alumno = this.alumno.filter(alum => alum !== alumno)
            Swal.fire(
              'Alumno dado de alta',
              `Alumno ${alumno.nombres} dado de alta con exito.`,
              'success'
            )
          }, error => {
            Swal.fire(
              'Error al dar de alta',
              `Alumno ${alumno.nombres} no dado de alta.`,
              'error'
            )
          }
        )
      }else{
        Swal.fire(
          'Cancelado',
          `Alumno ${alumno.nombres} no dado de alta.`,
          'error'
        )
      }
    })
  }

  eliminarAlumno(alumno: CPanel): void{
    Swal.fire({
      title: '¿Estas seguro?',
      text: `¿Seguro que desea eliminar al alumno ${alumno.nombres} ${alumno.primerApellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if(result.value){
        this.serviceAlumno.eliminarAlumno(alumno).subscribe(
          response => {
            this.alumno = this.alumno.filter(alum => alum !== alumno)
            Swal.fire(
              'Alumno eliminado',
              `Alumno ${alumno.nombres} eliminado con exito.`,
              'success'
            )
          }, error => {
            Swal.fire(
              'Error al eliminar',
              `Alumno ${alumno.nombres} no eliminado.`,
              'error'
            )
          }
        )
      }else{
        Swal.fire(
          'Cancelado',
          `Alumno ${alumno.nombres} no eliminado.`,
          'error'
        )
      }
    })
  }


}
