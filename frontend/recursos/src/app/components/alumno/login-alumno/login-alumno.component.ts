import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.component.html',
  styleUrls: ['./login-alumno.component.css']
})
export class LoginAlumnoComponent {

  constructor(private route: Router) { }

  alumn(){
    this.route.navigate(['/panel-alumno']);
  }
}
