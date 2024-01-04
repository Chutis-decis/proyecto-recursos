import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modalidadEscolar } from 'src/app/datos_escolares/ModalidadEscolar';
import { DatosEscolares } from 'src/app/datos_escolares/escolares';
import { planEducativo } from 'src/app/datos_escolares/planEducativo';
import { Universidad } from '../../datos_escolares/universidad';


@Injectable({
  providedIn: 'root'
})
export class EscolaresService {
  /* URL */
  url = 'http://localhost:8081/datos-escolares';

  /* Constructor */
  constructor(private httpClient: HttpClient) { }


   /* Obtencion de los alumnos  */
  obtenerEscolar():Observable<DatosEscolares[]> {
    return this.httpClient.get<DatosEscolares[]>(`${this.url}`);
  }

  /* Creacion de un nuevo usuario (alumno) */
  createEscolar(aspirante:DatosEscolares):Observable<DatosEscolares>{
    return this.httpClient.post<DatosEscolares>(`${this.url}`, aspirante);
  }

  /* Obtencion de un solo alumno */
  getById(id: number):Observable<DatosEscolares>{
    return this.httpClient.get<DatosEscolares>(`${this.url}/${id}`);
  }

  /* Actualizar */
  editarEscolar(id: number, aspirante: DatosEscolares): Observable<Object>{
    return this.httpClient.put<DatosEscolares>(`${this.url}/${id}`, aspirante);
  }

  /* Eliminar */
  deleted(datos:DatosEscolares):Observable<DatosEscolares>{
    return this.httpClient.delete<DatosEscolares>(`${this.url}/${datos.id}`);
  }

  activated(datos:DatosEscolares):Observable<DatosEscolares>{
    return this.httpClient.delete<DatosEscolares>(`${this.url}/recuperacion/${datos.id}`);
  }

  eliminar(datos:DatosEscolares):Observable<DatosEscolares>{
    return this.httpClient.delete<DatosEscolares>(`${this.url}/eliminar/${datos.id}`);
  }

  /* ********************************************** PLAN EDUCATIVO ****************************** */
  /* url */
  urlPlan = 'http://localhost:8081/plan-educativo'


  /* Obtencion de los planes educativos  */
  getPlanEducativo():Observable<planEducativo[]> {
    return this.httpClient.get<planEducativo[]>(`${this.urlPlan}`);
  }

  /* Creacion de un nuevo plan educativo */
  createPlanEducativo(plan:DatosEscolares):Observable<DatosEscolares>{
    return this.httpClient.post<DatosEscolares>(`${this.urlPlan}`, plan);
  }

  /* ***************************************** UNIVERSIDAD **************************************** */
  urlUniversidad = 'http://localhost:8081/universidad'

  /* Obtencion de las universidades  */
  getUniversidad():Observable<Universidad[]> {
    return this.httpClient.get<Universidad[]>(`${this.url}`);
  }

  /* Creacion de una nueva universidad */
  createUniversidad(universidad:Universidad):Observable<Universidad>{
    return this.httpClient.post<Universidad>(`${this.url}`, universidad);
  }

  /* delete universidad logic */
  deleteUniversidad(id: number):Observable<Universidad>{
    return this.httpClient.delete<Universidad>(`${this.url}/${id}`);
  }

  /* modifier university */
  updateUniversidad(id: number, universidad: Universidad): Observable<Object>{
    return this.httpClient.put<Universidad>(`${this.url}/${id}`, universidad);
  }

  /* ***************************************************** MODALIDAD ESCOLAR ************************ */
  urlModalidad = 'http://localhost:8081/modalidad-escolar'

  /* Obtencion de las modalidades escolares  */
  getModalidadEscolar():Observable<modalidadEscolar[]> {
    return this.httpClient.get<modalidadEscolar[]>(`${this.url}`);
  }

  /* Creacion de una nueva modalidad escolar */
  createModalidadEscolar(modalidad:modalidadEscolar):Observable<modalidadEscolar>{
    return this.httpClient.post<modalidadEscolar>(`${this.url}`, modalidad);
  }

  /* Delete logic modalidad escolar */
  deleteModalidadEscolar(id: number):Observable<modalidadEscolar>{
    return this.httpClient.delete<modalidadEscolar>(`${this.url}/${id}`);
  }

  /* Create modalidad escolar */
  updateModalidadEscolar(id: number, modalidad: modalidadEscolar): Observable<Object>{
    return this.httpClient.put<modalidadEscolar>(`${this.url}/${id}`, modalidad);
  }
}
