import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ftd } from 'src/app/ftd';

@Injectable({
  providedIn: 'root'
})
export class FtdService {

  /* URL */
  url = 'http://localhost:8081/datosftd';

  constructor(private httpClient: HttpClient) { }

  /* Obtencion de todos los datos ftd  */
  obtenerFTD():Observable<ftd[]> {
    return this.httpClient.get<ftd[]>(`${this.url}`);  
  }

  /* Obtencion de un dato ftd  */
  getById(id: number):Observable<ftd>{
    return this.httpClient.get<ftd>(`${this.url}/${id}`);
  }

  /* Creacion de un nuevo usuario (alumno) */
  createDatosFTD(datosFTD: ftd):Observable<any>{
    return this.httpClient.post<any>(`${this.url}`, datosFTD);
  }

  /* Actualizar */
  editarDatosFTD(id: number, datosFTD: ftd): Observable<Object>{
    return this.httpClient.put<ftd>(`${this.url}/${id}`, datosFTD);
  }

  /* Eliminar */
  deletedDatosFTD(id: number):Observable<ftd>{
    return this.httpClient.delete<ftd>(`${this.url}/${id}`);
  }

  activarDatosFTD(id: number): Observable<Object>{
    return this.httpClient.delete<ftd>(`${this.url}/recuperacion/${id}`);
  }
  
}
