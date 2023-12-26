import { Component } from '@angular/core';
import { Beca } from 'src/app/FTD/Beca';
import { FtdService } from 'src/app/service/ftd/ftd.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-beca-baja',
  templateUrl: './beca-baja.component.html',
})
export class BecaBajaComponent {
  beca: Beca = new Beca();
  becas: Beca[] = [];

  constructor(private ftdService: FtdService) {}

  ngOnInit(): void {
    this.getBecas();
  }
  getBecas(): void{
    this.ftdService.obtenerBecas().subscribe(becas => this.becas = becas);
  }

  delete(beca: Beca): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea mover la beca ${beca.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, moverla',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.ftdService.activarDatosFTDBecas(beca).subscribe(
          res => {
            this.becas = this.becas.filter(b => b !== beca)
            Swal.fire('Beca Movida', `Beca ${beca.nombre} movida con éxito`, 'success');
          }
        )
      }
    })
  }
}
