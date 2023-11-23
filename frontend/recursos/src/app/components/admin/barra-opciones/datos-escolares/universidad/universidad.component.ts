import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Universidad } from 'src/app/datos_escolares/Universidad';
import { Escolares } from 'src/app/datos_escolares/escolares';
import { EscolaresService } from 'src/app/service/escolar/escolares.service';
import { UniversidadService } from 'src/app/service/escolar/universidad.service';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.component.html',
  styleUrls: ['./universidad.component.css']
})
export class UniversidadComponent {
  /* Atributos */
  universidad: Universidad [] = [];
  uni: Universidad = new Universidad();

  escolarUni: Escolares = new Escolares();
  /* Constructor */
  constructor(private uniService: UniversidadService, private  route: Router, private escService: EscolaresService) { }

  /* Inicializacion */
  ngOnInit(): void {
    this.getUniversidad();
  }

  /* Metodo para la obtencion de la universidad */
  getUniversidad(){
    this.uniService.getUniversidad().subscribe(data => {
      this.universidad = data;
      console.log(this.universidad);
    });
  }

  create():void{
    console.log(this.uni);
    this.uniService.createUniversidad(this.uni).subscribe(
      res=> this.getUniversidad()
    );
    this.route.navigate(['/datos-escolares/universidad'])
  }

  /* Eliminar */
  deleteUni(id: number): void{
    this.uniService.deleteUniversidad(id).subscribe(data => {
      console.log("Alumno eliminado", data);
      this.getUniversidad();
    });
  }
  /* Editar Universidad */
  /* Actializacion */
  editarUniversidad(): void {
    this.escService.updateUniversidad(this.uni.id , this.uni).subscribe(
      res => {
        console.log('Datos de universidad actualizados con éxito');
        this.route.navigate(['/datos-escolares/universidad']);
      },
      err => console.log('Error al actualizar los datos de universidad')
    );
  }
}
