import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';
import { Tramite } from 'src/app/tramite';

@Component({
  selector: 'app-tramite',
  templateUrl: './tramite.component.html',
  styleUrls: ['./tramite.component.css']
})
export class TramiteComponent {
  /* Atributos */
  tramite: Tramite [] = []
  tra: Tramite = new Tramite();

  /* Constructor */
  constructor(private ingresoService: IngresoService, private route: Router){}


  ngOnInit(): void {
    this.getTramite();
  }


  getTramite(){
    this.ingresoService.obtencionTramiteIngreso().subscribe(data => {
      this.tramite = data;
      console.log(this.tramite);
    });
  }
  
  create():void{
    console.log(this.tra);
    this.ingresoService.createIngresoTramite(this.tra).subscribe(
      res=> this.getTramite()
    );
    this.route.navigate(['/datos-ingreso/tramite'])
  }

  update(){

  }
  deletePerfilamineto(id:number){
    this.ingresoService.eliminarTramite(id).subscribe(data => {
      console.log("Alumno eliminado", data);
      this.getTramite();
    });
  }
}
