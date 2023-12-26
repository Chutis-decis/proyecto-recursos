import { Component } from '@angular/core';
import { modalidadEscolar } from 'src/app/datos_escolares/ModalidadEscolar';
import { ActivatedRoute } from '@angular/router';
import { ModalidadService } from 'src/app/service/escolar/modalidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modalidad-escolar-baja',
  templateUrl: './modalidad-escolar-baja.component.html',
})
export class ModalidadEscolarBajaComponent {
  modalidad: modalidadEscolar [] = [];
  moda = new modalidadEscolar();

  constructor(private modalidadService: ModalidadService, private activatedRouter: ActivatedRoute) { }

  OnInit(): void {
    this.getModalidad();
  }

  cargar(): void{
    this.activatedRouter.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.modalidadService.getModalidadById(id).subscribe((modalidad) => this.moda = modalidad)
      }
    });
  }

  getModalidad(){
    this.modalidadService.getModalidad().subscribe((modalidad) => {
      this.modalidad = modalidad;
    });
  }

  delete(modalidad: modalidadEscolar): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea mover a la modalidad escolar ${modalidad.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, mover',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.modalidadService.actvatedModalidad(modalidad).subscribe(
          res => {
            this.modalidad = this.modalidad.filter(b => b !== modalidad)
            Swal.fire('Modalidad Escolar Movida', `Modalidad Escolarizada ${modalidad.nombre} movida con éxito`, 'success');
          }
        )
      }
    })
  }
}
