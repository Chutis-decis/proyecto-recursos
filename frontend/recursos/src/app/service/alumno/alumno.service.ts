import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CPanel } from 'src/app/components/admin/panel-admin/CPanel';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  /* URL listado de  todos los empleados en el backend */
  baseUrl = 'http://localhost:8081/api/v1/estudiante';


  constructor(private httpClient: HttpClient) { }

  /* Obtencion de los alumnos  */
  obtenerAlumnos():Observable<CPanel[]> {
    return this.httpClient.get<CPanel[]>(`${this.baseUrl}`);  
  }
}
