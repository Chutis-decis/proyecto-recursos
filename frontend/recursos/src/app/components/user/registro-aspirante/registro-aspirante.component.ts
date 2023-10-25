import { Component, OnInit } from '@angular/core';
import { CPanel } from '../../admin/CPanel';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from 'src/app/service/alumno/alumno.service';
import { Escolares } from 'src/app/escolares';

@Component({
  selector: 'app-registro-aspirante',
  templateUrl: './registro-aspirante.component.html',
  styleUrls: ['./registro-aspirante.component.css']
})
export class RegistroAspiranteComponent implements OnInit{
  /* Atributo para crear un nuevo estudiante */
  estudiante : CPanel = new CPanel();
  estudiantes: CPanel[];
  /* Atributo para crear un nuevo dato escolar */
  escolares: Escolares = new Escolares();

  /* Constructor */
  constructor(private route: Router, public alumnoService: AlumnoService, private activateRouter: ActivatedRoute) { this.route = route }

  getAll():void{
    this.alumnoService.obtenerAlumnos().subscribe(
      e=> this.estudiantes = e
    )
  }

  create():void{
    console.log(this.estudiante);
    this.alumnoService.createAlumno(this.estudiante).subscribe(
      res=> this.getAll()
    );
    this.route.navigate(['/aspirantes'])
  }

  ngOnInit(): void {
  }
  cargar():void{
    this.activateRouter.params.subscribe(
      e=> {
        let estudianteId = e['estudianteId'];
        if(estudianteId){
          this.alumnoService.getById(estudianteId).subscribe(
            es=> this.estudiante = es
          ) 
        }
      }
    );
  }
}
