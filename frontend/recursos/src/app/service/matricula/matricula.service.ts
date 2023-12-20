import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  fechaIngreso: string;
  idUniversidad: string;
  idGrupo: string;
  idControlAlumno: string;
  
  constructor() { }
}
