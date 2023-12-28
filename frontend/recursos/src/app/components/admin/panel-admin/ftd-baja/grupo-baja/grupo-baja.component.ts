import { Component } from '@angular/core';
import { error } from 'pdf-lib';
import { Grupo } from 'src/app/FTD/Grupo';
import { FtdService } from 'src/app/service/ftd/ftd.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-grupo-baja',
  templateUrl: './grupo-baja.component.html'
})
export class GrupoBajaComponent {
  grupo: Grupo[] = [];
  group = new Grupo();

  constructor(private serviceGrupo: FtdService) { }

  ngOnInit(): void {
    this.getGrupo();
  }
  getGrupo(): void{
    this.serviceGrupo.obtenerGrupo().subscribe(grupo => this.grupo = grupo);
  }

  delete(group: Grupo): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea mover el grupo ${group.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, mover',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.serviceGrupo.activatedDatosFTDGrupo(group).subscribe(
          response => {
            this.grupo = this.grupo.filter(servi => servi !== group)
            Swal.fire(
              'Grupo Movido',
              `Grupo ${group.nombre} movido con éxito`,
              'success'
            )
          }
        )
      }
    });
  }

  eliminar(group: Grupo): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar el grupo ${group.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.serviceGrupo.eliminarDatosFTDGrupo(group).subscribe(
          response => {
            this.grupo = this.grupo.filter(servi => servi !== group)
            Swal.fire(
              'Grupo Eliminado',
              `Grupo ${group.nombre} eliminado con éxito`,
              'success'
            )
          },error => {
            Swal.fire(
              'Error',
              `Grupo ${group.nombre} no se puede eliminar porque tiene alumnos asignados`,
              'error'
            )
          }
        )
      }
    });
  }
}
