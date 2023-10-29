import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escolares } from 'src/app/escolares';
import { EscolaresService } from 'src/app/service/escolar/escolares.service';

@Component({
  selector: 'app-datos-escolares',
  templateUrl: './datos-escolares.component.html',
  styleUrls: ['./datos-escolares.component.css']
})
export class DatosEscolaresComponent {
  /* Atributos */
  escolares: Escolares[] = [];
  escolar = new Escolares();

  constructor(private serviceEstudiante:EscolaresService, private  activateRouter: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.getEsolares();
    this.cargar();
  }

  /* Mostrar los datos Escolares */
  getEsolares(){
    this.serviceEstudiante.obtenerEscolar().subscribe(data => {
      this.escolares = data;
    });
  }

  /* Modificacion de estos datos personales */
  cargar(){
    this.activateRouter.params.subscribe(e => {
      let id = e['id'];
      if(id){
        this.serviceEstudiante.getById(id).subscribe(data => this.escolar=data);
      }
    });
  }

  /* Actializacion */
  update():void{
    this.serviceEstudiante.editarEscolar(this.escolar.id, this.escolar).subscribe(
      e=> this.route.navigate(['/registro-datos-personales'])
    );
  }

  /* Eliminacion de los datos escolares */
  deleteEstudiante(id: number): void{
    this.serviceEstudiante.deleted(id).subscribe(data => {
      console.log("Alumno eliminado", data);
      this.getEsolares();
    });
  }

  obtenerEscolares(): void{
    this.getEsolares();
    this.route.navigate(['/detalle-escolares']);
  }
}
