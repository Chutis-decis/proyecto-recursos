import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CPanel } from 'src/app/components/admin/CPanel';
import { ftd } from 'src/app/FTD/ftd';
import { FtdService } from 'src/app/service/ftd/ftd.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-datos-ftd',
  templateUrl: './registro-datos-ftd.component.html',
  styleUrls: ['./registro-datos-ftd.component.css']
})
export class RegistroDatosFtdComponent{

  /* Atributos de los datos FTD */
  datosFTD= new ftd();
  ftd: ftd[] = [];
  datosAspirante = new CPanel() ;

  /* Constructor */
  constructor(private datosFTDService: FtdService, private router: Router, private activateRouter: ActivatedRoute) { } 

  ngOnInit(): void {
    this.cargar();
  }

  /* Obtencion de los datos FTD */
  getAll():void{
    this.datosFTDService.obtenerFTD().subscribe(
      e=> this.ftd = e
    )
  }
  /* Metodo que se ejecuta al iniciar el componente */
  cargar(){
    this.activateRouter.params.subscribe(e => {
      let id = e['id'];
      if(id){
        this.datosFTDService.getById(id).subscribe(data => this.datosFTD=data);
      }
    });
  }

  create():void{
    console.log(this.datosFTD);
    this.datosFTDService.createDatosFTD(this.datosFTD).subscribe(
      res=> {this.router.navigate(['/datos_ftd'])
      Swal.fire('Nuevos datos ftd', `Datos FTD de:  ${this.datosFTD.nombreProyecto} creado con exito!`, 'success')
    }
    );
  }

  update():void{
    this.datosFTDService.editarDatosFTD(this.datosFTD.id, this.datosFTD).subscribe(
      e=> {
        this.router.navigate(['/datos-ftd'])
        Swal.fire('Datos FTD actualizados', `Datos ${this.datosFTD.nombreProyecto} actualizado con exito!`, 'success')
      }
    );
  }
}
