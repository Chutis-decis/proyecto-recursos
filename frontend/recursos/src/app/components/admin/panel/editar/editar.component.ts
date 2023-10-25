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
    
  }

  editar(alumno: any){
    this.alumnos = alumno
  }

  
}
