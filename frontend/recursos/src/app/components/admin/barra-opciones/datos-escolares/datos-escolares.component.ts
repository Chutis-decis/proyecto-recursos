import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosEscolares } from 'src/app/datos_escolares/escolares';
import { Universidad } from 'src/app/datos_escolares/Universidad';
import { EscolaresService } from 'src/app/service/escolar/escolares.service';

@Component({
  selector: 'app-datos-escolares',
  templateUrl: './datos-escolares.component.html'
})
export class DatosEscolaresComponent {
  /* Atributos */
  escolares: DatosEscolares[] = [];
  escolar = new DatosEscolares();
  universidad: Universidad[] = [];

  searchTerm: string = '';

  constructor(private serviceEstudiante:EscolaresService, private  activateRouter: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.getEscolar();
    this.cargar();
  }

  /* Mostrar los datos Escolares */
  getEscolar(){
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
      this.getEscolar();
    });
  }

  obtenerEscolares(): void{
    this.getEscolar();
    this.route.navigate(['/detalle-escolares']);
  }
}
