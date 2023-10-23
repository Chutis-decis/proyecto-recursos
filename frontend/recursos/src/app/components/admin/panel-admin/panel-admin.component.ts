import { Component, OnInit } from '@angular/core';
import { CPanel } from '../CPanel';
import { AlumnoService } from 'src/app/service/alumno/alumno.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {

  /* Atributo */
  alumno: CPanel[];
  estudiante : CPanel = new CPanel();

  /* Constructor */
  constructor(private alumnoService: AlumnoService, private rout: Router, private activatedRouter: ActivatedRoute) {this.rout = rout; }
  
  /* Metodos para el crud */
  ngOnInit(): void {
    this.getAlumnos();
  }

  private getAlumnos(){
    this.alumnoService.obtenerAlumnos().subscribe(data => {
      this.alumno = data;
    });
  }

  /* Metodo de ver la informacion del alumno alumno */
  verInfo(){
    this.rout.navigate(['/seeInformacion']);
  }

  /* Eliminar */
  delete(aspirante:CPanel):void{
    console.log("Eliminado");
    this.alumnoService.deleted(aspirante.id).subscribe(
      res=> this.alumnoService.obtenerAlumnos().subscribe(
        response=> this.alumno= response
      )
    );
  }
  deleteStudent(id: number) {  
    this.alumnoService.deleted(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.alumnoService.obtenerAlumnos().subscribe(data =>{  
            this.alumno =data  
            })  
        },  
        error => console.log(error));  
  } 

  /* Editar */
  edittar(){
    this.rout.navigate(['/editar/::estudianteId']);
  }
  
  /* Eliminar */
  eliminar(){
    this.rout.navigate(['/eliminar/:estudianteId']);
  }
  
  /* Obtencion de los alumnos */
  get(estudianteId: number){
    return this.alumnoService.get(estudianteId).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    })
  }
}
