import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Perfilamiento } from 'src/app/perfilamiento';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';

@Component({
  selector: 'app-perfilamiento',
  templateUrl: './perfilamiento.component.html',
  styleUrls: ['./perfilamiento.component.css']
})
export class PerfilamientoComponent {
  perfilamiento: Perfilamiento[] = [];
  perf: Perfilamiento= new Perfilamiento();


  constructor(private ingresoService: IngresoService, private route: Router){}

  ngOnInit(): void {
    this.getPerfilamiento();
  }

  /* Metodo para la obtencion de PERFILAMIENTO */
  getPerfilamiento(){
    this.ingresoService.obtencionPerfilamientoIngreso().subscribe(data => {
      this.perfilamiento = data;
      console.log(this.perfilamiento);
    });
  }

  create():void{
    console.log(this.perf);
    this.ingresoService.createIngresoPerfilamiento(this.perf).subscribe(
      res=> this.getPerfilamiento()
    );
    this.route.navigate(['/datos-ingreso/perfilamiento'])
  }

  update():void{
    this.ingresoService.editarIngresoPerfilamiento(this.perf.id, this.perf).subscribe(
      e=> this.route.navigate(['/datos-ingreso/perfilamiento'])
    );
  }
  deletePerfilamineto(id: number){
    this.ingresoService.eliminarPerfilamiento(id).subscribe(data => {
      console.log("Alumno eliminado", data);
      this.getPerfilamiento();
    });
  }
}
