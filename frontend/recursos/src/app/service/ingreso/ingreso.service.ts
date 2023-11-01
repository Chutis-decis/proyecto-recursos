import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingreso } from 'src/app/ingreso';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  /* URL datos de Ingreso */
  url = 'http://localhost:8081/datos-ingreso';

  /* Constructor */
  constructor(private httpClient: HttpClient) { }

  /* Obtencion de los alumnos  */
  obtenerIngreso():Observable<Ingreso[]> {
    return this.httpClient.get<Ingreso[]>(`${this.url}`);  
  }

  /* Creacion de un nuevo usuario (datos de ingreso) */
  createIngreso(aspirante:Ingreso):Observable<Ingreso>{
    return this.httpClient.post<Ingreso>(`${this.url}`, aspirante);
  }

  /* Obtencion de un solo alumno */
  getById(id: number):Observable<Ingreso>{
    return this.httpClient.get<Ingreso>(`${this.url}/${id}`);
  }

  /* Actualizar */
  editarIngreso(id: number, aspirante: Ingreso): Observable<Object>{
    return this.httpClient.put<Ingreso>(`${this.url}/${id}`, aspirante);
  } 

  /* Eliminar */
  deleted(id: number):Observable<Ingreso>{
    return this.httpClient.delete<Ingreso>(`${this.url}/${id}`);
  }
}
