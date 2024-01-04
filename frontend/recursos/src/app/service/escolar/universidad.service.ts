import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Unsubscribable } from 'rxjs';
import { Universidad } from 'src/app/datos_escolares/universidad';

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
  editarUniversidad(university: Universidad): Observable<Object>{
    return this.httpClient.put<Universidad>(`${this.url}/${university.id}`, university);
  }

  /* Delete */
  deleteUniversidad(universidad: Universidad): Observable<Object>{
    return this.httpClient.delete(`${this.url}/${universidad.id}`);
  }

  getUniversidadById(id: number): Observable<Universidad>{
    return this.httpClient.get<Universidad>(`${this.url}/${id}`);
  }

  activatedUniversidad(universidad: Universidad): Observable<Universidad>{
    return this.httpClient.delete<Universidad>(`${this.url}/recuperacion/${universidad.id}`);
  }

  eliminarUniversidad(universidad: Universidad): Observable<Universidad>{
    return this.httpClient.delete<Universidad>(`${this.url}/delete/${universidad.id}`);
  }
}
