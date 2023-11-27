import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { modalidadEscolar } from 'src/app/datos_escolares/ModalidadEscolar';
import { Modalidad } from 'src/app/modalidad';
import { EscolaresService } from 'src/app/service/escolar/escolares.service';
import { ModalidadService } from 'src/app/service/escolar/modalidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modalidad-escolar',
  templateUrl: './modalidad-escolar.component.html',
  styleUrls: ['./modalidad-escolar.component.css']
})
export class ModalidadEscolarComponent {

  /* Atributos */
  modalidad: modalidadEscolar [] = [];
  moda = new modalidadEscolar();
  
  /* Constructor */
  constructor(private serviceModalidadEscolar: ModalidadService, private route: Router, private activatedRouter: ActivatedRoute) { }

  /* Inicializacion */
  ngOnInit(): void {
    this.getModalidad();
    this.cargar();
  }

  cargar(): void{
    this.activatedRouter.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.serviceModalidadEscolar.getModalidadById(id).subscribe((modalidad) => this.moda = modalidad)
      }
    });
  }

  /* Metodo para la obtencion de la modalidad*/
  getModalidad(){
    this.serviceModalidadEscolar.getModalidad().subscribe(data => {
      this.modalidad = data;
      console.log(this.modalidad);
    });
  }

  /* Crear modalidad  */
  create():void{
    console.log(this.moda);
    this.serviceModalidadEscolar.create(this.moda).subscribe(
      res => {
        this.route.navigate(['/datos-escolares/modalidad-escolar']);
        Swal.fire('Nueva Modalidad', `${res.nombre}`, 'success');
      }
    );
  }
  

  //Editar modalidad
  update():void{
    this.serviceModalidadEscolar.editarModalidad(this.moda).subscribe(
      e=> {
        this.route.navigate(['/datos-escolares/modalidad-escolar']);
        Swal.fire('Modalidad Actualizada', `${this.moda.nombre}`, 'success');
      }
    );
  }


  /* Delete */
  delete(modalidad: modalidadEscolar): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Estas Seguro?",
      text: `¿Seguro que desea eliminar al cliente ${modalidad.nombre}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceModalidadEscolar.deleteModalidad(modalidad).subscribe(
          response => {
            this.modalidad = this.modalidad.filter(cli => cli !== modalidad)
            swalWithBootstrapButtons.fire({
              title: "Cliente Eliminado",
              text: `Cliente ${modalidad.nombre} eliminado con éxito!`,
              icon: "success"
            });
          }
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  }
}
