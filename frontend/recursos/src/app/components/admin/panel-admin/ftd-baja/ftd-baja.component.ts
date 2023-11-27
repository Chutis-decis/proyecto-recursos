import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ftd } from 'src/app/FTD/ftd';
import { FtdService } from 'src/app/service/ftd/ftd.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ftd-baja',
  templateUrl: './ftd-baja.component.html',
  styleUrls: ['./ftd-baja.component.css']
})
export class FtdBajaComponent {
  ftddata: ftd [] = [];
  ftd = new ftd();

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
    alta(id: number): void{
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
          this.serviceFTD.activarDatosFTD(id).subscribe(
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
}
