import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingreso } from 'src/app/ingreso';
import { Modalidad } from 'src/app/modalidad';
import { Perfilamiento } from 'src/app/perfilamiento';
import { Tramite } from 'src/app/tramite';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  /* URL datos de Ingreso */
  url = 'http://localhost:8081/datos-ingreso';

  /* Cabeceras */
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  /* Constructor */
  constructor(private httpClient: HttpClient) { }

  /* Obtencion de los alumnos  */
  obtenerIngreso():Observable<Ingreso[]> {
    return this.httpClient.get<Ingreso[]>(`${this.url}`);  
  }

  /* Creacion de un nuevo usuario (datos de ingreso) */
  createIngreso(aspirante:Ingreso):Observable<Ingreso>{
    return this.httpClient.post<Ingreso>(`${this.url}`, aspirante);
  }

  /* Obtencion de un solo alumno */
  getById(id: number):Observable<Ingreso>{
    return this.httpClient.get<Ingreso>(`${this.url}/${id}`);
  }

  /* Actualizar */
  editarIngreso(aspirante: Ingreso): Observable<Object>{
    return this.httpClient.put<Ingreso>(`${this.url}/${aspirante.id}`, aspirante);
  } 

  /* Eliminar */
  deleted(id: number):Observable<Ingreso>{
    return this.httpClient.delete<Ingreso>(`${this.url}/${id}`);
  }

  /* ************************** Modalidad *************************************************************** */
  /* URL de la modalidad para los datos de ingreso */
  urlModalidad = 'http://localhost:8081/modalidades';

  /* Obtencion de la modalidad en los datos de ingreso */
  obtencionModalidadIngreso ():Observable<Modalidad[]>{
    return this.httpClient.get<Modalidad[]>(`${this.urlModalidad}`);
  }

  /* Creacion de un nuevo usuario con la modalidad */
  createIngresoModalidad(modalidad: Modalidad):Observable<Ingreso>{
    return this.httpClient.post<Ingreso>(`${this.urlModalidad}`, modalidad);
  }

  /* Obtenciòn de una sola modalidad */
  getByIdModalidad(id: number):Observable<Modalidad>{
    return this.httpClient.get<Modalidad>(`${this.urlModalidad}/${id}`);
  }

  /* Actualizar la modalidad */
  editarIngresoModalidad(modalidad: Modalidad): Observable<Object>{
    return this.httpClient.put<Modalidad>(`${this.urlModalidad}/${modalidad.id}`, modalidad,{headers: this.httpHeaders});
  }

  /* Eliminar modalidad */
  eliminarModalidad(modalidad: Modalidad):Observable<Modalidad>{
    return this.httpClient.delete<Modalidad>(`${this.urlModalidad}/${modalidad.id}`);
  }


  /* ************************************************ PERFILAMIENTO ************************************* */
  urlPerfilamiento = 'http://localhost:8081/perfilamiento';

  /* Obtencion del perfilamiento de los datos de ingreso */
  obtencionPerfilamientoIngreso ():Observable<Perfilamiento[]>{
    return this.httpClient.get<Perfilamiento[]>(`${this.urlPerfilamiento}`);
  }
  
  /* Creacion de un nuevo usuario con el perfilamiento */
  createIngresoPerfilamiento(perfilamiento: Perfilamiento):Observable<Ingreso>{
    return this.httpClient.post<Ingreso>(`${this.urlPerfilamiento}`, perfilamiento);
  }

  /* Obtenciòn de un solo perfilamiento */
  getByIdPerfilamiento(id: number):Observable<Perfilamiento>{
    return this.httpClient.get<Perfilamiento>(`${this.urlPerfilamiento}/${id}`);
  }

  /* Actualizar el perfilamiento */
  editarIngresoPerfilamiento(perfilamiento: Perfilamiento): Observable<Object>{
    return this.httpClient.put<Perfilamiento>(`${this.urlPerfilamiento}/${perfilamiento.id}`, perfilamiento);
  }

  /* Eliminar perfilamiento */
  eliminarPerfilamiento(perfilamiento: Perfilamiento):Observable<Perfilamiento>{
    return this.httpClient.delete<Perfilamiento>(`${this.urlPerfilamiento}/${perfilamiento.id}`);
  }

  /* ************************************************ TRAMITE ***************************************** */
  urlTramite = 'http://localhost:8081/tramites';

  /* Obtencion del tramite de los datos de ingreso */
  obtencionTramiteIngreso ():Observable<Tramite[]>{
    return this.httpClient.get<Tramite[]>(`${this.urlTramite}`);
  }

  /* Creacion de un nuevo usuario con el tramite */
  createIngresoTramite(tramite: Tramite):Observable<Ingreso>{
    return this.httpClient.post<Ingreso>(`${this.urlTramite}`, tramite);
  }

  /* Obtenciòn de un solo tramite */
  getByIdTramite(id: number):Observable<Tramite>{
    return this.httpClient.get<Tramite>(`${this.urlTramite}/${id}`);
  }

  /* Actualizar el tramite */
  editarIngresoTramite(tramite: Tramite): Observable<Object>{
    return this.httpClient.put<Tramite>(`${this.urlTramite}/${tramite.id}`, tramite);
  }

  /* Eliminar tramite */
  eliminarTramite(tramite: Tramite):Observable<Tramite>{
    return this.httpClient.delete<Tramite>(`${this.urlTramite}/${tramite.id}`);
  }
}
