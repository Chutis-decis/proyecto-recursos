import { Component, OnInit } from '@angular/core';
import { CPanel } from '../../CPanel';
import { AlumnoService } from 'src/app/service/alumno/alumno.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  /* Atributo */
  alumnos: CPanel = new CPanel();
  /* Constructor */
  constructor(private alumnosService: AlumnoService, private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activateRouter.params.subscribe(
      e=> {
        let id = e['estudianteId'];
        if(id){
          this.alumnosService.getById(id).subscribe(
            es=> this.alumnos = es
          ) 
        }
      }
    );
  }
}
