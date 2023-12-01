import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosFTD } from 'src/app/FTD/ftd';
import { FtdService } from 'src/app/service/ftd/ftd.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-datos-ftd',
  templateUrl: './datos-ftd.component.html',
  styleUrls: ['./datos-ftd.component.css']
})
export class DatosFtdComponent {

  /* Atributos de los datos FTD */
  datosFTD: DatosFTD[] = [];
  ftd = new DatosFTD();

  /* Constructor de los datos FTD */
  constructor(private ftdService: FtdService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getDatosFTD();
    this.cargar();
  }

  /* Mostrar los datos Escolares */
  getDatosFTD(){
    this.ftdService.obtenerFTD().subscribe(data => {
      this.datosFTD = data;
    });
  }

  /* Modificacion de estos datos personales */
  cargar(){
    this.activateRouter.params.subscribe(e => {
      let id = e['id'];
      if(id){
        this.ftdService.getById(id).subscribe(data => this.ftd=data);
      }
    });
  }


  /* Eliminacion Logica de los datos FTD */
  deleteDatosFTD(dFtd: DatosFTD): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que deseas mover el dato Ftd ${dFtd.nombreProyecto} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, mover',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.ftdService.deletedDatosFTD(dFtd).subscribe(
          res => {
            this.datosFTD = this.datosFTD.filter(b => b !== dFtd)
            Swal.fire('Datos Ftd movidos', `Datos FTD ${dFtd.nombreProyecto} movido con éxito`, 'success');
          }
        )
      }
    })
  }


  /* Actializacion */
  update():void{
    this.ftdService.editarDatosFTD(this.ftd).subscribe(
      e=> this.router.navigate(['/registro-datos-ftd'])
    );
  }

  /* Obtener los datos FTD */
  obtenerDatosFTD(): void{
    this.getDatosFTD();
    this.router.navigate(['/detalle-datos-ftd']);
  }
  
}
