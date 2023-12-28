import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'pdf-lib';
import { Periodo } from 'src/app/datos_escolares/Periodo';
import { PeriodoService } from 'src/app/service/escolar/periodo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-periodo-baja',
  templateUrl: './periodo-baja.component.html'
})
export class PeriodoBajaComponent {
  periodo: Periodo = new Periodo();
  periodos: Periodo[] = [];

  constructor(private periodoService: PeriodoService, activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPeriodo();
  }

  getPeriodo(){
    this.periodoService.getPeriodo().subscribe(data => {
      this.periodos = data;
    })
  }

  delete(periodo: Periodo){
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea mover el Periodo ${periodo.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, mover',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if(result.value){
        this.periodoService.activatedPeriodo(periodo).subscribe(
          res => {
            this.getPeriodo();
            Swal.fire('Periodo Movido', `${periodo.nombre}`, 'success');
          },error => {
            Swal.fire('Error', `${periodo.nombre}`, 'error');
          }
        )
      }else if(result.dismiss === Swal.DismissReason.cancel){
        Swal.fire('Cancelado', 'El periodo no se ha movido', 'error');
      }
    })
  }

  eliminarPeriodo(periodo: Periodo){
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar el Periodo ${periodo.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if(result.value){
        this.periodoService.eliminarPeriodo(periodo).subscribe(
          res => {
            this.getPeriodo();
            Swal.fire('Periodo Eliminado', `${periodo.nombre}`, 'success');
          },error => {
            Swal.fire('Error', `El periodo ${periodo.nombre} no se puede eliminar debido a que tiene periodos asociados`, 'error');
          }
        )
      }else if(result.dismiss === Swal.DismissReason.cancel){
        Swal.fire('Cancelado', 'El periodo no se ha eliminado', 'error');
      }
    })
  }
}
