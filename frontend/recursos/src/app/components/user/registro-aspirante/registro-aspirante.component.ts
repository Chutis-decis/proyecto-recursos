import { Component, OnInit } from '@angular/core';
import { CPanel } from '../../admin/CPanel';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from 'src/app/service/alumno/alumno.service';

@Component({
  selector: 'app-registro-aspirante',
  templateUrl: './registro-aspirante.component.html',
  styleUrls: ['./registro-aspirante.component.css']
})
export class RegistroAspiranteComponent implements OnInit{
  /* Atributo para crear un nuevo estudiante */
  estudiante : CPanel = new CPanel();

  /* Constructor */
  constructor(private route: Router, public alumnoService: AlumnoService, private activateRouter: ActivatedRoute) { this.route = route }

  create():void{
    console.log(this.estudiante);
    this.alumnoService.createAlumno(this.estudiante).subscribe(
      res=> this.route.navigate(['/aspirantes']),
    );
  }

  ngOnInit(): void {
    this.cargar();
  }
  cargar():void{
    this.activateRouter.params.subscribe(
      e=> {
        let estudianteId = e['estudianteId'];
        if(estudianteId){
          this.alumnoService.get(estudianteId).subscribe(
            es=> this.estudiante = es
          ) 
        }
      }
    );
  }
}