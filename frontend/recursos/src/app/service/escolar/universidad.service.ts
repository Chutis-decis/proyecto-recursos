import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { universidad } from 'src/app/datos_escolares/universidad';

@Injectable({
  providedIn: 'root'
})
export class UniversidadService {
  /* URL */
  private url = 'http://localhost:8081/datos-escolares/universidad';

  /* Constructor */
  constructor(private httpClient: HttpClient) { }

  getUniversidad():Observable<universidad[]> {
    return this.httpClient.get<universidad[]>(`${this.url}`);  
  }

  /* Creacion de una nueva universidad */
  createUniversidad(universidad:universidad):Observable<universidad>{
    return this.httpClient.post<universidad>(`${this.url}`, universidad);
  }
}
