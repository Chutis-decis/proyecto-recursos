import { Component } from '@angular/core';
import { Modalidad } from 'src/app/modalidad';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modalidad-baja',
  templateUrl: './modalidad-baja.component.html'
})
export class ModalidadBajaComponent {
  /* Atributos */
  modalidad: Modalidad [] = [];
  mod: Modalidad = new Modalidad();

  constructor(private ingresoService: IngresoService){}

  ngOnInit(): void {
    this.getModalida();
  }

  getModalida(){
    this.ingresoService.obtencionModalidadIngreso().subscribe(data => {
      this.modalidad = data;
      console.log(this.modalidad);
    });
  }

  deleteModalidad(modalidad:Modalidad): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea mover la modalidad ${modalidad.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, darla de alta',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.ingresoService.activatedModalidad(modalidad).subscribe(
          res => {
            this.modalidad = this.modalidad.filter(b => b !== modalidad)
            Swal.fire('Modalidad Movida', `Modalidad ${modalidad.nombre} movida con éxito`, 'success');
          }
        )
      }
    })
  }

  eliminarModalidad(modalidad:Modalidad): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar la modalidad ${modalidad.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.ingresoService.deleteModalidadTotal(modalidad).subscribe(
          res => {
            this.modalidad = this.modalidad.filter(b => b !== modalidad)
            Swal.fire('Modalidad Eliminada', `Modalidad ${modalidad.nombre} eliminada con éxito`, 'success');
          }, error  => {
            Swal.fire('Error', `Modalidad ${modalidad.nombre} no eliminada`, 'error');
          }
        )
      }
    })
  }

}
