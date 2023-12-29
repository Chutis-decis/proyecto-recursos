import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosFTD } from 'src/app/FTD/ftd';
import { FtdService } from 'src/app/service/ftd/ftd.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ftd-baja',
  templateUrl: './ftd-baja.component.html'
})
export class FtdBajaComponent {
  ftd = new DatosFTD();
  ftddata:  DatosFTD [] = [];

    constructor(private serviceFTD: FtdService, private router: Router) { }
  
    ngOnInit(): void {
      this.getDatosFTD();
    }

    getDatosFTD() {
      this.serviceFTD.obtenerFTD().subscribe(data => {
        this.ftddata = data;
      });
    }

    getFtd(): void{
      if(this.ftd.activo == false){
        this.getDatosFTD();
      }
      this.router.navigate(['/detalle-ftd']);
    }

    /* Alta a los estudiantes */
    alta(datosFTD: DatosFTD): void{
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
          this.serviceFTD.activarDatosFTD(datosFTD).subscribe(
            response => {
              swalWithBootstrapButtons.fire({
                title: "Registro Alta!",
                text: `Registro ${this.ftd.nombreProyecto} dado de alta!`,
                icon: "success"
              });
              this.getDatosFTD();
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

    /* Eliminación física de los datos ftd de los estudiantes */
    delete(datosFTD: DatosFTD): void{
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Estas seguro?",
        text: "No podras revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.serviceFTD.deletedDatosFTD(datosFTD).subscribe(
            response => {
              swalWithBootstrapButtons.fire({
                title: "Eliminado!",
                text: `Registro ${this.ftd.nombreProyecto} eliminado!`,
                icon: "success"
              });
              this.getDatosFTD();
            }
          );
          
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelado!",
            text: "Cancelaste la eliminación!!! :)",
            icon: "error"
          });
        }
      });
    }
}
