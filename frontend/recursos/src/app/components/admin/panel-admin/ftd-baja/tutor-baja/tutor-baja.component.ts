import { Component } from '@angular/core';
import { error } from 'pdf-lib';
import { Tutor } from 'src/app/FTD/Tutor';
import { FtdService } from 'src/app/service/ftd/ftd.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tutor-baja',
  templateUrl: './tutor-baja.component.html'
})
export class TutorBajaComponent {
  tutor: Tutor[] = [];
  tutores = new Tutor();

  constructor(private serviceTutor: FtdService) { }

  ngOnInit(): void {
    this.getTutor();
  }

  getTutor(){
    this.serviceTutor.obtenerTutor().subscribe(tutor => this.tutor = tutor);
  }

  delete(tutores: Tutor): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea dar de alta al tutor ${tutores.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, dar de alta',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.serviceTutor.activarDatosFTDTutor(tutores).subscribe(
          res => {
            this.tutor = this.tutor.filter(b => b !== tutores)
            Swal.fire('Tutor dado de Alta', `Tutor ${tutores.nombre} dado de alta con éxito`, 'success');
          }
        )
      }
    })
  }

  eliminar(tutores: Tutor): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar al tutor ${tutores.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.serviceTutor.eliminacionLogicaDatosFTDTutor(tutores).subscribe(
          res => {
            this.tutor = this.tutor.filter(b => b !== tutores)
            Swal.fire('Tutor Eliminado', `Tutor ${tutores.nombre} eliminado con éxito`, 'success');
          },error => {
            Swal.fire('Error', `Tutor ${tutores.nombre} no se puede eliminar`, 'error');
          }
        )
      }
    })
  }
}
