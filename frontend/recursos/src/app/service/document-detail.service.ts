import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Document } from '../Document';

@Injectable({
  providedIn: 'root'
})
export class DocumentDetailService {
  private apiUrl = 'http://localhost:8081/api/documents';

  constructor(private http: HttpClient) {}

  getDocumentById(id: number): Observable<Document> {
    return this.http.get<Document>(`${this.apiUrl}/${id}`);
  }

  deleteDocument(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  downloadDocument(id: number): Observable<Blob> {
    const headers = new HttpHeaders({
      'Accept': 'application/octet-stream',
    });

    return this.http.get(`${this.apiUrl}/download/${id}`, { responseType: 'blob', headers });
  }

  approveDocument(id: number): Observable<Document> {
    return this.http.post<Document>(`${this.apiUrl}/approve/${id}`, {});
  }

  disapproveDocument(id: number): Observable<Document> {
    return this.http.post<Document>(`${this.apiUrl}/disapprove/${id}`, {});
  }

  addComment(id: number, comment: string): Observable<string> {
    return this.http.post<{ comment: string }>(`${this.apiUrl}/comment/${id}`, { comment })
      .pipe(map(response => response.comment));
  }

  clearComments(documentId: number): Observable<Document> {
    return this.http.post<Document>(`${this.apiUrl}/clear-comments/${documentId}`, {});
  }
}
