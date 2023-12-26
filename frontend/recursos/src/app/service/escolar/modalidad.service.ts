import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modalidadEscolar } from 'src/app/datos_escolares/ModalidadEscolar';

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {
  /* URL */
  private url = 'http://localhost:8081/modalidad-escolar';

  constructor(private httpClient: HttpClient) { }

  getModalidad():Observable<modalidadEscolar[]> {
    return this.httpClient.get<modalidadEscolar[]>(`${this.url}`);  
  }

  /* Crear una  modalidad */
  create(modalidad: modalidadEscolar): Observable<modalidadEscolar>{
    return this.httpClient.post<modalidadEscolar>(`${this.url}`, modalidad);
  }

  /* Editar Modalidad */
  editarModalidad(modalidad: modalidadEscolar): Observable<modalidadEscolar>{
    return this.httpClient.put<modalidadEscolar>(`${this.url}/${modalidad.id}`, modalidad);
  }

  /* Eliminancion de la modalidad escolar */
  deleteModalidad(modalidad: modalidadEscolar): Observable<modalidadEscolar>{
    return this.httpClient.delete<modalidadEscolar>(`${this.url}/${modalidad.id}`);
  }

  getModalidadById(id: number): Observable<modalidadEscolar>{
    return this.httpClient.get<modalidadEscolar>(`${this.url}/${id}`);
  }

  actvatedModalidad(modalidad: modalidadEscolar): Observable<modalidadEscolar>{
    return this.httpClient.delete<modalidadEscolar>(`${this.url}/recuperacion/${modalidad.id}`);
  }
}
