import { Component, OnInit } from '@angular/core';
import { CPanel } from '../../CPanel';
import { AlumnoService } from 'src/app/service/alumno/alumno.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
  /* Eliminacion de los alumnos */
  deleteEstudiante(id: number): void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Estas seguro?",
      text: "Dar de alta al Aspirante!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, dalo de alta!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceAlumno.deletedTrue(id).subscribe(
          response => {
            swalWithBootstrapButtons.fire({
              title: "Registro Alta!",
              text: `Registro ${this.alumnos.nombres} dado de alta!`,
              icon: "success"
            });
            this.getAlumnos();
          }
        );
        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelado dado de alta!",
          text: "Cancelaste dar de alta!!! :)",
          icon: "error"
        });
      }
    });
  }


}
