import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ftd } from 'src/app/ftd';
import { FtdService } from 'src/app/service/ftd/ftd.service';

@Component({
  selector: 'app-datos-ftd',
  templateUrl: './datos-ftd.component.html',
  styleUrls: ['./datos-ftd.component.css']
})
export class DatosFtdComponent {

  /* Atributos de los datos FTD */
  datosFTD: ftd[] = [];
  ftd = new ftd();

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

  /* Actializacion */
  update():void{
    this.ftdService.editarDatosFTD(this.ftd.id, this.ftd).subscribe(
      e=> this.router.navigate(['/registro-datos-ftd'])
    );
  }


  /* Eliminacion Logica de los datos FTD */
  deleteDatosFTD(id: number): void{
    this.ftdService.deletedDatosFTD(id).subscribe(data => {
      console.log("Alumno eliminado", data);
      this.getDatosFTD();
    });
  }

  obtenerDatosFTD(): void{
    this.getDatosFTD();
    this.router.navigate(['/detalle-ftd']);
  }
}
