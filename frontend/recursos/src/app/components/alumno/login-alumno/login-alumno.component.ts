import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.component.html',
  styleUrls: ['./login-alumno.component.css']
})
export class LoginAlumnoComponent {
  email:string = "chutis123f@gmail.com";
  password:string = "Lmd34015";
  constructor(private route: Router) { }
  user: string = "";
  pas: string = "";
  alumn(){
    if(this.user == this.email && this.pas == this.password){
      this.route.navigate(['/panel-alumno']);
      Swal.fire(
        'Bienvenido alumno',
        `Alumno: ${this.user}`,
        'success'
      )
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o contraseña incorrectos'
      })
    }
  }
}
