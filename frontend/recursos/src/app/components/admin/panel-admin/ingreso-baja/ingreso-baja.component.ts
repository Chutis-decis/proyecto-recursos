import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'pdf-lib';
import { DatosIngreso } from 'src/app/ingreso';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingreso-baja',
  templateUrl: './ingreso-baja.component.html'
})
export class IngresoBajaComponent {
  /* Atributos y Objetos */
  ingreso: DatosIngreso [];
  ingresar = new DatosIngreso();

  /* Constructor */
  constructor(private ingresoService: IngresoService, private route: Router) { }

  ngOnInit(): void {
    this.getAllIngreso();
  }

  /* Obtencion de los datos de ingreso */
  getAllIngreso(){
    this.ingresoService.obtenerIngreso().subscribe(data => {
      this.ingreso = data;
    });
  }

  /* Dar de alta */
  activated(ingreso: DatosIngreso): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que deseas activar a datos de ingreso ${ingreso.tramite.nombreTramite}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, activar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        ingreso.activo = true;
        this.ingresoService.activated(ingreso).subscribe(
          res => {
            this.ingreso= this.ingreso.filter(b => b !== ingreso)
            Swal.fire('Datos de Ingreso Activado', `Datos de Ingreso ${ingreso.tramite.nombreTramite} activado con éxito`, 'success');
          }
        )
      }
    })
  }

  /* Eliminar */
  eliminar(ingreso: DatosIngreso): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que deseas eliminar a datos de ingreso ${ingreso.tramite.nombreTramite}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        ingreso.activo = true;
        this.ingresoService.eliminar(ingreso).subscribe(
          res => {
            this.ingreso= this.ingreso.filter(b => b !== ingreso)
            Swal.fire('Datos de Ingreso Eliminado', `Datos de Ingreso ${ingreso.tramite.nombreTramite} eliminado con éxito`, 'success');
          },error => {
            Swal.fire('Error', `Datos de Ingreso ${ingreso.tramite.nombreTramite} no se puede eliminar`, 'error');
          }
        )
      }
    })
  }
}
