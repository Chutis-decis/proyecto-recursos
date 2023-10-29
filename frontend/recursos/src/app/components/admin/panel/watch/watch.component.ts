import { Component, OnInit } from '@angular/core';
import { CPanel } from '../../CPanel';
import { AlumnoService } from 'src/app/service/alumno/alumno.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit{
  /* Atributo */
  alumno: CPanel[];
  alumnoSeleccionado: CPanel = new CPanel();
  id:number;
  constructor(private alumnoService: AlumnoService, private route: Router, private router: ActivatedRoute) { }

  /* Metodos para el crud */
  ngOnInit(): void {
    this.getAlumnos();
  }

  /* Metodo para vizualizar los datos de  los alumnos: Datos de Ingreso, Datos FTD, datos escolares y datos personales */
  private getAlumnos(){
    this.alumnoService.obtenerAlumnos().subscribe((data) => {
      this.alumno = data;
    });
  }

  getDataById(id: number): void{
    this.alumnoService.getById(id).subscribe((data) => {
      this.alumnoSeleccionado = data;
    })
  }
}
