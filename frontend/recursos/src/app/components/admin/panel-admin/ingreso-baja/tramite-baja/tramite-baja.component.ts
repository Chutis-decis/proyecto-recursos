import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';
import { Tramite } from 'src/app/tramite';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tramite-baja',
  templateUrl: './tramite-baja.component.html'
})
export class TramiteBajaComponent {
  tramite: Tramite [] = []
  tra: Tramite = new Tramite();

  constructor(private ingresoService: IngresoService, private activatedRouter: ActivatedRoute){}

  ngOnInit(): void {
    this.getTramite();
  }

  getTramite(){
    this.ingresoService.obtencionTramiteIngreso().subscribe(data => {
      this.tramite = data;
      console.log(this.tramite);
    });
  }

  deleteTramite(tramite: Tramite): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea mover el trámite ${tramite.nombreTramite} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, mover',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.ingresoService.activatedTramite(tramite).subscribe(
          res => {
            this.tramite = this.tramite.filter(b => b !== tramite)
            Swal.fire('Trámite Movido', `Trámite ${tramite.nombreTramite} movido con éxito`, 'success');
          }
        )
      }
    })
  }
}
