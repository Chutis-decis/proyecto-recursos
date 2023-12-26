import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beca } from 'src/app/FTD/Beca';
import { Curso } from 'src/app/FTD/Curso';
import { Grupo } from 'src/app/FTD/Grupo';
import { Tutor } from 'src/app/FTD/Tutor';
import { DatosFTD } from 'src/app/FTD/ftd';

@Injectable({
  providedIn: 'root'
})
export class FtdService {

  /* URL */
  url = 'http://localhost:8081/datosftd';

  constructor(private httpClient: HttpClient) { }

  /* Obtencion de todos los datos ftd  */
  obtenerFTD():Observable<DatosFTD[]> {
    return this.httpClient.get<DatosFTD[]>(`${this.url}`);  
  }

  /* Obtencion de un dato DatosFTD  */
  getById(id: number):Observable<DatosFTD>{
    return this.httpClient.get<DatosFTD>(`${this.url}/${id}`);
  }

  /* Creacion de un nuevo usuario (alumno) */
  createDatosFTD(datosFTD: DatosFTD):Observable<any>{
    return this.httpClient.post<any>(`${this.url}`, datosFTD);
  }

  /* Actualizar */
  editarDatosFTD(datosFTD: DatosFTD): Observable<Object>{
    return this.httpClient.put<DatosFTD>(`${this.url}/${datosFTD.id}`, datosFTD);
  }

  /* Eliminar */
  deletedDatosFTD(datos: DatosFTD):Observable<DatosFTD>{
    return this.httpClient.delete<DatosFTD>(`${this.url}/${datos.id}`);
  }

  activarDatosFTD(datosFTD: DatosFTD): Observable<Object>{
    return this.httpClient.delete<DatosFTD>(`${this.url}/recuperacion/${datosFTD.id}`);
  }

  /* ****************************************Becas ********************************* */
  urlBecas = 'http://localhost:8081/becas';

  /* Obtencion de todos los datos de la beca  */
  obtenerBecas():Observable<Beca[]> {
    return this.httpClient.get<Beca[]>(`${this.urlBecas}`);  
  }

  

  /* Obtencion de un dato DatosFTD  */
  getByIdBecas(id: number):Observable<Beca>{
    return this.httpClient.get<Beca>(`${this.urlBecas}/${id}`);
  }

  /* Creacion de un nuevo usuario (alumno) */
  createDatosFTDBecas(datosFTD: Beca):Observable<any>{
    return this.httpClient.post<any>(`${this.urlBecas}`, datosFTD);
  }

  /* Actualizar */
  editarDatosFTDBecas(beca: Beca): Observable<Object>{
    return this.httpClient.put<Beca>(`${this.urlBecas}/${beca.id}`, beca);
  }

  /* Eliminar la beca */
  deletedDatosFTDBecas(beca:Beca):Observable<Beca>{
    return this.httpClient.delete<Beca>(`${this.urlBecas}/${beca.id}`);
  }
  

  activarDatosFTDBecas(beca: Beca): Observable<Beca>{
    return this.httpClient.delete<Beca>(`${this.urlBecas}/recuperacion/${beca.id}`);
  }
  /* ***************************************************+++ TUTOR ****************************************** */
  urlTutor = 'http://localhost:8081/tutor';

  /* Obtencion de todos los datos del tutor  */
  obtenerTutor():Observable<Tutor[]> {
    return this.httpClient.get<Tutor[]>(`${this.urlTutor}`);  
  }

  /* Obtencio por id de los tutores */
  getByIdTutor(id:number):Observable<Tutor>{
    return this.httpClient.get<Tutor>(`${this.urlTutor}/${id}`);
  }

  /* creacion de un nuevo tutor */
  createDatosFTDTutor(tutor: Tutor):Observable<any>{
    return this.httpClient.post<any>(`${this.urlTutor}`, tutor);
  }

  /* Actualizar tutor */
  editarDatosFTDTutor(tutor: Tutor): Observable<Object>{
    return this.httpClient.put<Tutor>(`${this.urlTutor}/${tutor.id}`, tutor);
  }

  /* Eliminar tutor */
  deletedDatosFTDTutor(tutor: Tutor):Observable<Tutor>{
    return this.httpClient.delete<Tutor>(`${this.urlTutor}/${tutor.id}`);
  }

  activarDatosFTDTutor(tutor: Tutor): Observable<Tutor>{
    return this.httpClient.delete<Tutor>(`${this.urlTutor}/recuperacion/${tutor.id}`);
  }

  /* ************************************************ GRUPO ********************************************* */

  urlGrupo = 'http://localhost:8081/grupos';

  /* Obtencion de todos los datos del grupo  */
  obtenerGrupo():Observable<Grupo[]> {
    return this.httpClient.get<Grupo[]>(`${this.urlGrupo}`);  
  }

  /* Obtencion de grupo por ID */
  getByIdGrupo(id: number):Observable<Grupo>{
    return this.httpClient.get<Grupo>(`${this.urlGrupo}/${id}`);
  }

  /* Crear Grupo */
  createDatosFTDGrupo(grupo: Grupo):Observable<any>{
    return this.httpClient.post<any>(`${this.urlGrupo}`, grupo);
  }

  /* Actualizar Grupo */
  editarDatosFTDGrupo(grupo: Grupo): Observable<Object>{
    return this.httpClient.put<Grupo>(`${this.urlGrupo}/${grupo.id}`, grupo);
  }

  /* Eliminar Grupo */
  deletedDatosFTDGrupo(grupo: Grupo):Observable<Grupo>{
    return this.httpClient.delete<Grupo>(`${this.urlGrupo}/${grupo.id}`);
  }
  activatedDatosFTDGrupo(grupo: Grupo): Observable<Grupo>{
    return this.httpClient.delete<Grupo>(`${this.urlGrupo}/recuperacion/${grupo.id}`);
  }
  /* ********************************************************* CRUSOS ********************************** */
  urlCurso = 'http://localhost:8081/cursos';

  /* Obtencion de todos los datos del grupo  */
  obtenerCurso():Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(`${this.urlCurso}`);  
  }

  /* Obtencion de grupo por ID */
  getByIdCurso(id: number):Observable<Curso>{
    return this.httpClient.get<Curso>(`${this.urlCurso}/${id}`);
  }

  /* Crear Grupo */
  createDatosFTDCurso(curso: Curso):Observable<any>{
    return this.httpClient.post<any>(`${this.urlCurso}`, curso);
  }

  /* Actualizar Grupo */
  editarDatosFTDCurso(curso: Curso): Observable<Object>{
    return this.httpClient.put<Curso>(`${this.urlCurso}/${curso.id}`, curso);
  }

  /* Eliminar Grupo */
  deletedDatosFTDCurso(curso: Curso):Observable<Curso>{
    return this.httpClient.delete<Curso>(`${this.urlCurso}/${curso.id}`);
  }

  activatedDatosFTDCurso(curso: Curso): Observable<Curso>{
    return this.httpClient.delete<Curso>(`${this.urlCurso}/recuperacion/${curso.id}`);
  }
}
