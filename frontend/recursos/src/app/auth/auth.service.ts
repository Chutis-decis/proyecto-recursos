import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlAuth = 'http://localhost:8081/api/auth';

  constructor(private httpClient: HttpClient) { }


  /* Registro de un nuevo usuario */
  registrarUsuario(username: string, password: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.httpClient.post(`${this.urlAuth}/registro`, body.toString(), options);
  }


  /* Iniciar sesión */
  iniciarSesion(username: string, password: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.httpClient.post(`${this.urlAuth}/login`, body.toString(), options);
  }
}
