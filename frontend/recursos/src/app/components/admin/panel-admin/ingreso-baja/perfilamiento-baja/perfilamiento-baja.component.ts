import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'pdf-lib';
import { Perfilamiento } from 'src/app/perfilamiento';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfilamiento-baja',
  templateUrl: './perfilamiento-baja.component.html'
})
export class PerfilamientoBajaComponent {
  perfilamiento: Perfilamiento[] = [];
  perf: Perfilamiento= new Perfilamiento();

  constructor(private ingresoService: IngresoService, private activatedRouter: ActivatedRoute){}
  ngOnInit(): void {
    this.getPerfilamiento();
  }

  /* Metodo para la obtencion de PERFILAMIENTO */
  getPerfilamiento(){
    this.ingresoService.obtencionPerfilamientoIngreso().subscribe(data => {
      this.perfilamiento = data;
      console.log(this.perfilamiento);
    });
  }

  deletePerfilamineto(perfilamiento: Perfilamiento): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea mover el perfilamiento ${perfilamiento.nombrePerfilamiento} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, mover',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.ingresoService.activatedPerfilamiento(perfilamiento).subscribe(
          res => {
            this.perfilamiento = this.perfilamiento.filter(b => b !== perfilamiento)
            Swal.fire('Perfilamiento Movido', `Perfilamiento ${perfilamiento.nombrePerfilamiento} movido con éxito`, 'success');
          }
        )
      }
    })
  }

  eliminarPerfilamiento(perfilamiento: Perfilamiento): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar el perfilamiento ${perfilamiento.nombrePerfilamiento} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.ingresoService.eliminarPerfilamiento(perfilamiento).subscribe(
          res => {
            this.perfilamiento = this.perfilamiento.filter(b => b !== perfilamiento)
            Swal.fire('Perfilamiento Eliminado', `Perfilamiento ${perfilamiento.nombrePerfilamiento} eliminado con éxito`, 'success');
          }, error  => {
            Swal.fire('Error', `Perfilamiento ${perfilamiento.nombrePerfilamiento} no eliminado`, 'error');
          }
        )
      }else{
        Swal.fire('Cancelado', 'El perfilamiento no se ha eliminado', 'error');
      }
    })
  }
}
