import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escolares } from 'src/app/datos_escolares/escolares';
import { planEducativo } from 'src/app/datos_escolares/planEducativo';

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

  /* ********************************************** PLAN EDUCATIVO ****************************** */
  /* url */
  urlPlan = 'http://localhost:8081/plan-educativo'


  /* Obtencion de los planes educativos  */
  getPlanEducativo():Observable<planEducativo[]> {
    return this.httpClient.get<planEducativo[]>(`${this.urlPlan}/plan-educativo`);  
  }

  /* Creacion de un nuevo plan educativo */
  createPlanEducativo(plan:Escolares):Observable<Escolares>{
    return this.httpClient.post<Escolares>(`${this.urlPlan}/plan-educativo`, plan);
  }

  /* ***************************************** UNIVERSIDAD **************************************** */
  /* Obtencion de las universidades  */
  getUniversidad():Observable<Escolares[]> {
    return this.httpClient.get<Escolares[]>(`${this.url}/universidad`);  
  }

  /* Creacion de una nueva universidad */
  createUniversidad(universidad:Escolares):Observable<Escolares>{
    return this.httpClient.post<Escolares>(`${this.url}/universidad`, universidad);
  }

  /* ***************************************************** MODALIDAD ESCOLAR ************************ */
  /* Obtencion de las modalidades escolares  */
  getModalidadEscolar():Observable<Escolares[]> {
    return this.httpClient.get<Escolares[]>(`${this.url}/modalidad-escolar`);  
  }

  /* Creacion de una nueva modalidad escolar */
  createModalidadEscolar(modalidad:Escolares):Observable<Escolares>{
    return this.httpClient.post<Escolares>(`${this.url}/modalidad-escolar`, modalidad);
  }
}
