import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from '../model/model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  
  constructor(private httpClient: HttpClient) { }

  getModel(): Observable<Model[]>{
    return this.httpClient.get<Model[]>('http://localhost:8081/api/v1/estudiante').pipe(map(
      res => res 
    ));
  }
}
