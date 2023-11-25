import { Component, OnInit } from '@angular/core';
import { CPanel } from '../CPanel';
import { AlumnoService } from 'src/app/service/alumno/alumno.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {

  /* Atributo */
  alumno: CPanel[];
  estudiante : CPanel = new CPanel();

  searchTerm: string = '';


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
        this.alumnoService.deleted(id).subscribe(
          response => {
            swalWithBootstrapButtons.fire({
              title: "Registro Alta!",
              text: `Registro ${this.estudiante.nombres} dado de baja!`,
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
          title: "Cancelado dado de baja!",
          text: "Cancelaste dar de baja!!! :)",
          icon: "error"
        });
      }
    });
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
  /* *******************************************************************************************************++ */
  
  
  /* Metodo para mostrar datos completos */
  getAlumno(): void{
    this.getAlumnos();
    this.rout.navigate(['/detalles']);
  }


  /* Registrar datos FTD */
  registrarDatosFTD(): void{
    this.rout.navigate(['/registro-datos-ftd']);
  }
}
