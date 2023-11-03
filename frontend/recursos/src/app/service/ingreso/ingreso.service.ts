import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingreso } from 'src/app/ingreso';
import { Modalidad } from 'src/app/modalidad';

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

  /* URL de la modalidad para los datos de ingreso */
  urlModalidad = 'http://localhost:8081/modalidades';

  /* Obtencion de la modalidad en los datos de ingreso */
  obtencionModalidadIngreso ():Observable<Modalidad>{
    return this.httpClient.get<Modalidad>(`${this.urlModalidad}`);
  }

  /* Creacion de un nuevo usuario con la modalidad */
  createIngresoModalidad(modalidad: Modalidad):Observable<Ingreso>{
    return this.httpClient.post<Ingreso>(`${this.urlModalidad}`, modalidad);
  }

  /* Obtenciòn de una sola modalidad */
  getByIdModalidad(id: number):Observable<Modalidad>{
    return this.httpClient.get<Modalidad>(`${this.urlModalidad}/${id}`);
  }

  /* Actualizar la modalidad */
  editarIngresoModalidad(id: number, modalidad: Modalidad): Observable<Object>{
    return this.httpClient.put<Modalidad>(`${this.urlModalidad}/${id}`, modalidad);
  }
}
