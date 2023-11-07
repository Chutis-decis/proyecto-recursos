import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CPanel } from 'src/app/components/admin/CPanel';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  [x: string]: any;

  /* URL listado de  todos los empleados en el backend */
  baseUrl = 'http://localhost:8081/datos-personales';


  constructor(private httpClient: HttpClient) { }

  /* Obtencion de los alumnos  */
  obtenerAlumnos():Observable<CPanel[]> {
    return this.httpClient.get<CPanel[]>(`${this.baseUrl}`);  
  }

  /* Creacion de un nuevo usuario (alumno) */
  createAlumno(aspirante:CPanel):Observable<CPanel>{
    return this.httpClient.post<CPanel>(`${this.baseUrl}`, aspirante);
  }

  /* Obtencion de un solo alumno */
  getById(id: number):Observable<CPanel>{
    return this.httpClient.get<CPanel>(`${this.baseUrl}/${id}`);
  }

  /* Actualizar */
  editarAlumno (id: number, aspirante: CPanel): Observable<Object>{
    return this.httpClient.put<CPanel>(`${this.baseUrl}/${id}`, aspirante);
  } 

  /* Eliminar */
  deleted(id: number):Observable<CPanel>{
    return this.httpClient.delete<CPanel>(`${this.baseUrl}/${id}`);
  }
}
