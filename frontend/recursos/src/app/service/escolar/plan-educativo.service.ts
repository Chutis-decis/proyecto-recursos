import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { planEducativo } from 'src/app/datos_escolares/planEducativo';

@Injectable({
  providedIn: 'root'
})
export class PlanEducativoService {
  /* URL */
  private url = 'http://localhost:8081/plan-educativo';

  constructor(private httpClient: HttpClient) { }

  /* Obtencion de plan educativo */
  getPlanEducativo():Observable<planEducativo[]> {
    return this.httpClient.get<planEducativo[]>(`${this.url}`);  
  }

  /* Crear un plan educativo */
  postPlan(plan: planEducativo): Observable<planEducativo>{
    return this.httpClient.post<planEducativo>(`${this.url}`, plan);
  }

  /* Eliminacion de Plan Educativo */
  deletePlan(planEducativo: planEducativo): Observable<planEducativo>{
    return this.httpClient.delete<planEducativo>(`${this.url}/${planEducativo.id}`);
  }

  /* Modificacion del plan educativo  */
  editarPlan(plan: planEducativo): Observable<planEducativo>{
    return this.httpClient.put<planEducativo>(`${this.url}/${plan.id}`, plan);
  }

  getPlanById(id: number): Observable<planEducativo>{
    return this.httpClient.get<planEducativo>(`${this.url}/${id}`);
  }

  activatedPlan(plan: planEducativo): Observable<planEducativo>{
    return this.httpClient.delete<planEducativo>(`${this.url}/recuperacion/${plan.id}`);
  }
}
