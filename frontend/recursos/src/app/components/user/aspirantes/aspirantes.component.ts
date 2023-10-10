import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CPanel } from '../../admin/CPanel';
import { AlumnoService } from 'src/app/service/alumno/alumno.service';

@Component({
  selector: 'app-aspirantes',
  templateUrl: './aspirantes.component.html',
  styleUrls: ['./aspirantes.component.css']
})
export class AspirantesComponent implements OnInit{

  /* Creamos un nuevo usuario vacio */
  estudiante : CPanel = new CPanel();

  /* Constructor */
  constructor(private route: Router, public alumnoService: AlumnoService) { this.route = route }

  formAspirante() {
    this.route.navigate(['/form-aspirante']);
  }

  ayuda(){
    this.route.navigate(['/ayuda']);
  }
  
  ngOnInit(): void {
  }

  create():void{
    console.log(this.estudiante);
    this.alumnoService.createAlumno(this.estudiante).subscribe(
      res=> this.route.navigate(['/aspirantes']),
    );
  }
}


