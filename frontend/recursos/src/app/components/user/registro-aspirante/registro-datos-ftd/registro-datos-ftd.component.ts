import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ftd } from 'src/app/ftd';
import { FtdService } from 'src/app/service/ftd/ftd.service';

@Component({
  selector: 'app-registro-datos-ftd',
  templateUrl: './registro-datos-ftd.component.html',
  styleUrls: ['./registro-datos-ftd.component.css']
})
export class RegistroDatosFtdComponent{

  /* Atributos de los datos FTD */
  datosFTD= new ftd();
  ftd: ftd[] = [];

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
      res=> this.getAll()
    );
    this.router.navigate(['/datos_ftd'])
  }

  update():void{
    this.datosFTDService.editarDatosFTD(this.datosFTD.id, this.datosFTD).subscribe(
      e=> this.router.navigate(['/datos-ftd'])
    );
  }
}
