import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  /* Constructor */
  constructor(private route:Router) { this.route = route }

  aspirante() {
    this.route.navigate(['/aspirante']);
  }

  login() {
    this.route.navigate(['/login']);
  }

  loginAlumno() {
    this.route.navigate(['/login-alumno']);
  }
}
