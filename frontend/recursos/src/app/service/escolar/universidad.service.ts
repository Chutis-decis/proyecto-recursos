import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Unsubscribable } from 'rxjs';
import { Universidad } from 'src/app/datos_escolares/Universidad';

@Injectable({
  providedIn: 'root'
})
export class UniversidadService {
  /* URL */
  private url = 'http://localhost:8081/universidad';

  /* Constructor */
  constructor(private httpClient: HttpClient) { }

  getUniversidad():Observable<Universidad[]> {
    return this.httpClient.get<Universidad[]>(`${this.url}`);  
  }

  /* Creacion de una nueva universidad */
  createUniversidad(universidad:Universidad):Observable<Universidad>{
    return this.httpClient.post<Universidad>(`${this.url}`, universidad);
  }

  /* Actualizar */
  editarUniversidad(id: number, university: Universidad): Observable<Object>{
    return this.httpClient.put<Universidad>(`${this.url}/${id}`, university);
  } 

  /* Delete */
  deleteUniversidad(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
