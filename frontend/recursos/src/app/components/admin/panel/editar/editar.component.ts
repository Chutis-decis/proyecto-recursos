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


  /* Cargar: servira para cargar todo el documento de alumnos para poder editar() */
  cargar():void{
    this.activateRouter.params.subscribe(
      e=> {
        let id = e['id'];
        if(id){
          this.alumnosService.get(id).subscribe(
            es => this.alumnos = es
          )
        } 
      }
    );
  }
}
