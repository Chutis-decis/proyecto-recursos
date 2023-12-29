import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosIngreso } from 'src/app/ingreso';
import { Modalidad } from 'src/app/modalidad';
import { Perfilamiento } from 'src/app/perfilamiento';
import { Tramite } from 'src/app/tramite';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  /* URL datos de DatosIngreso */
  url = 'http://localhost:8081/datos-ingreso';

  /* Cabeceras */
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  /* Constructor */
  constructor(private httpClient: HttpClient) { }

  /* Obtencion de los alumnos  */
  obtenerIngreso():Observable<DatosIngreso[]> {
    return this.httpClient.get<DatosIngreso[]>(`${this.url}`);  
  }

  /* Creacion de un nuevo usuario (datos de ingreso) */
  createIngreso(aspirante:DatosIngreso):Observable<DatosIngreso>{
    console.log(aspirante);
    return this.httpClient.post<DatosIngreso>(this.url, aspirante, {headers: this.httpHeaders});
  }

  /* Obtencion de un solo alumno */
  getById(id: number):Observable<DatosIngreso>{
    return this.httpClient.get<DatosIngreso>(`${this.url}/${id}`);
  }

  /* Actualizar */
  editarIngreso(aspirante: DatosIngreso): Observable<Object>{
    return this.httpClient.put<DatosIngreso>(`${this.url}/${aspirante.id}`, aspirante);
  } 

  /* Eliminar */
  deleted(ingreso: DatosIngreso):Observable<DatosIngreso>{
    return this.httpClient.delete<DatosIngreso>(`${this.url}/${ingreso.id}`);
  }

  activated(ingreso: DatosIngreso):Observable<DatosIngreso>{
    return this.httpClient.delete<DatosIngreso>(`${this.url}/recuperacion/${ingreso.id}`);
  }

  eliminar(ingreso: DatosIngreso):Observable<DatosIngreso>{
    return this.httpClient.delete<DatosIngreso>(`${this.url}/eliminar/${ingreso.id}`);
  }
  /* ************************** Modalidad *************************************************************** */
  /* URL de la modalidad para los datos de ingreso */
  urlModalidad = 'http://localhost:8081/modalidades';

  /* Obtencion de la modalidad en los datos de ingreso */
  obtencionModalidadIngreso ():Observable<Modalidad[]>{
    return this.httpClient.get<Modalidad[]>(`${this.urlModalidad}`);
  }

  /* Creacion de un nuevo usuario con la modalidad */
  createIngresoModalidad(modalidad: Modalidad):Observable<DatosIngreso>{
    return this.httpClient.post<DatosIngreso>(`${this.urlModalidad}`, modalidad);
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

  activatedModalidad(modalidad: Modalidad):Observable<Modalidad>{
    return this.httpClient.delete<Modalidad>(`${this.urlModalidad}/recuperacion/${modalidad.id}`);
  }

  deleteModalidadTotal(modalidad: Modalidad):Observable<Modalidad>{
    return this.httpClient.delete<Modalidad>(`${this.urlModalidad}/delete/${modalidad.id}`);
  }
  /* ************************************************ PERFILAMIENTO ************************************* */
  urlPerfilamiento = 'http://localhost:8081/perfilamiento';

  /* Obtencion del perfilamiento de los datos de ingreso */
  obtencionPerfilamientoIngreso ():Observable<Perfilamiento[]>{
    return this.httpClient.get<Perfilamiento[]>(`${this.urlPerfilamiento}`);
  }
  
  /* Creacion de un nuevo usuario con el perfilamiento */
  createIngresoPerfilamiento(perfilamiento: Perfilamiento):Observable<DatosIngreso>{
    return this.httpClient.post<DatosIngreso>(`${this.urlPerfilamiento}`, perfilamiento);
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

  activatedPerfilamiento(perfilamiento: Perfilamiento):Observable<Perfilamiento>{
    return this.httpClient.delete<Perfilamiento>(`${this.urlPerfilamiento}/recuperacion/${perfilamiento.id}`);
  }

  eliminarPerfilamientoTotal(perfilamiento: Perfilamiento):Observable<Perfilamiento>{
    return this.httpClient.delete<Perfilamiento>(`${this.urlPerfilamiento}/eliminar/${perfilamiento.id}`);
  }
  /* ************************************************ TRAMITE ***************************************** */
  urlTramite = 'http://localhost:8081/tramites';

  /* Obtencion del tramite de los datos de ingreso */
  obtencionTramiteIngreso ():Observable<Tramite[]>{
    return this.httpClient.get<Tramite[]>(`${this.urlTramite}`);
  }

  /* Creacion de un nuevo usuario con el tramite */
  createIngresoTramite(tramite: Tramite):Observable<DatosIngreso>{
    return this.httpClient.post<DatosIngreso>(`${this.urlTramite}`, tramite);
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

  activatedTramite(tramite: Tramite):Observable<Tramite>{
    return this.httpClient.delete<Tramite>(`${this.urlTramite}/recuperacion/${tramite.id}`);
  }
}
