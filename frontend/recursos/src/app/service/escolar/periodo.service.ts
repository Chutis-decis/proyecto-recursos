import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Periodo } from 'src/app/datos_escolares/Periodo';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {

  /* URL */
  private url = 'http://localhost:8081/periodo';
  constructor(private httpClient: HttpClient) { }

  /* Obtencion de plan educativo */
  getPeriodo():Observable<Periodo[]> {
    return this.httpClient.get<Periodo[]>(`${this.url}`);  
  }

  /* Obtener por Id */
  getPeriodoById(id: number): Observable<Periodo>{
    return this.httpClient.get<Periodo>(`${this.url}/${id}`);
  }

  /* Creacion de un nuevo plan educativo */
  createPeriodo(periodo:Periodo):Observable<Periodo>{
    return this.httpClient.post<Periodo>(`${this.url}`, periodo);
  }

  /* Actualizacion */
  editarPeriodo(period: Periodo): Observable<Object>{
    return this.httpClient.put<Periodo>(`${this.url}/${period.id}`, period);
  }

  /* Delete */
  deletePeriodo(periodo: Periodo): Observable<Object>{
    return this.httpClient.delete(`${this.url}/${periodo.id}`);
  }
  activatedPeriodo(periodo: Periodo): Observable<Periodo>{
    return this.httpClient.delete<Periodo>(`${this.url}/recuperacion/${periodo.id}`);
  }

  eliminarPeriodo(periodo: Periodo): Observable<Periodo>{ 
    return this.httpClient.delete<Periodo>(`${this.url}/delete/${periodo.id}`);
  }
}
