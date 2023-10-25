import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escolares } from 'src/app/escolares';

@Injectable({
  providedIn: 'root'
})
export class EscolaresService {
  /* URL */
  url = 'http://localhost:8081/datos-escolares';  

  /* Constructor */
  constructor(private httpClient: HttpClient) { }


   /* Obtencion de los alumnos  */
  obtenerEscolar():Observable<Escolares[]> {
    return this.httpClient.get<Escolares[]>(`${this.url}`);  
  }

  /* Creacion de un nuevo usuario (alumno) */
  createEscolar(aspirante:Escolares):Observable<Escolares>{
    return this.httpClient.post<Escolares>(`${this.url}`, aspirante);
  }

  /* Obtencion de un solo alumno */
  getById(id: number):Observable<Escolares>{
    return this.httpClient.get<Escolares>(`${this.url}/${id}`);
  }

  /* Actualizar */
  editarEscolar(id: number, aspirante: Escolares): Observable<Object>{
    return this.httpClient.put<Escolares>(`${this.url}/${id}`, aspirante);
  } 

  /* Eliminar */
  deleted(id: number):Observable<Escolares>{
    return this.httpClient.delete<Escolares>(`${this.url}/${id}`);
  }
}
