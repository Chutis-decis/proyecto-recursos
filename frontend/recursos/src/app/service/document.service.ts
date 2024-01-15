import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {Document} from '../Document'

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiUrl = 'http://localhost:8081/api/documents';

  constructor(private http: HttpClient) {}

  getAllDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(this.apiUrl);
  }

  addDocument(file: File, name: string, status: string, documentType: string): Observable<Document> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('name', name);
    formData.append('status', status);
    formData.append('documentType', documentType);

    return this.http.post<Document>(this.apiUrl, formData);
  }

  deleteDocument(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateDocument(id: number, file: File, name: string, status: string, documentType: string): Observable<Document> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('name', name);
    formData.append('status', status);
    formData.append('documentType', documentType);

    return this.http.put<Document>(`${this.apiUrl}/${id}`, formData);
  }
}
