import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Modalidad } from 'src/app/modalidad';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';

@Component({
  selector: 'app-modalidad',
  templateUrl: './modalidad.component.html',
  styleUrls: ['./modalidad.component.css']
})
export class ModalidadComponent {
  /* Atributos */
  modalidad: Modalidad [] = [];
  mod: Modalidad = new Modalidad();

  /* Constructor */
  constructor(private ingresoService: IngresoService, private route: Router){}
  
  ngOnInit(): void {
    this.getModalida();
  }

  /* Metodos */
  /* Obtencion de los datos */
  getModalida(){
    this.ingresoService.obtencionModalidadIngreso().subscribe(data => {
      this.modalidad = data;
      console.log(this.modalidad);
    });
  }

  create(){
    console.log(this.mod);
    this.ingresoService.createIngresoModalidad(this.mod).subscribe(
      res=> this.getModalida()
    );
    this.route.navigate(['/datos-ingreso/modalidad'])
  }

  update(){
    this.ingresoService.editarIngresoModalidad(this.mod.id, this.mod).subscribe(
      e=> this.route.navigate(['/datos-ingreso/modalidad'])
    );
  }

  deleteModalidad(id: number){
    this.ingresoService.eliminarModalidad(id).subscribe(data => {
      console.log("Alumno eliminado", data);
      this.getModalida();
    });
  }
}
