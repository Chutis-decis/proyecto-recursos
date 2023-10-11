import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CPanel } from 'src/app/components/admin/CPanel';

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

  /* Creacion de un nuevo usuario (alumno) */
  createAlumno(aspirante:CPanel):Observable<CPanel>{
    return this.httpClient.post<CPanel>(`${this.baseUrl}`, aspirante);
  }

  /* Obtencion de un solo alumno */
  get(estudianteId: number):Observable<CPanel>{
    return this.httpClient.get<CPanel>(`${this.baseUrl}/${estudianteId}`);
  }

  /* Actualizar */
  update(aspirante:CPanel):Observable<CPanel>{
    return this.httpClient.put<CPanel>(`${this.baseUrl}`, aspirante);
  }

  /* Eliminar */
  deleted(id: number):Observable<CPanel>{
    return this.httpClient.delete<CPanel>(`${this.baseUrl}`+'/'+id);
  }
}
