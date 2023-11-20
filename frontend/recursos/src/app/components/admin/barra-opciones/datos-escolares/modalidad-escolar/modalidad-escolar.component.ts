import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { modalidadEscolar } from 'src/app/datos_escolares/ModalidadEscolar';
import { EscolaresService } from 'src/app/service/escolar/escolares.service';
import { ModalidadService } from 'src/app/service/escolar/modalidad.service';

@Component({
  selector: 'app-modalidad-escolar',
  templateUrl: './modalidad-escolar.component.html',
  styleUrls: ['./modalidad-escolar.component.css']
})
export class ModalidadEscolarComponent {

  /* Atributos */
  modalidad: modalidadEscolar [] = [];
  moda = new modalidadEscolar();
  
  /* Constructor */
  constructor(private serviceModalidadEscolar: ModalidadService, private route: Router) { }

  /* Inicializacion */
  ngOnInit(): void {
    this.getModalidad();
  }


  /* Metodo para la obtencion de la modalidad*/
  getModalidad(){
    this.serviceModalidadEscolar.getModalidad().subscribe(data => {
      this.modalidad = data;
      console.log(this.modalidad);
    });
  }

  /* Crear modalidad  */
  create():void{
    console.log(this.moda);
    this.serviceModalidadEscolar.create(this.moda).subscribe(
      res=> this.getModalidad()
    );
    this.route.navigate(['/datos-escolares/modalidad-escolar'])
  }
  

  //Editar modalidad
  update():void{
    this.serviceModalidadEscolar.editarModalidad(this.moda.id, this.moda).subscribe(
      e=> this.route.navigate(['/datos-escolares/modalidad-escolar'])
    );
  }
}
