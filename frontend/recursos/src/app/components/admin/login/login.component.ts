import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = "chutis123f@gmail.com";
  password:string = "Lmd34015";
  
  constructor(private router: Router) {}
  user: string = "";
  pas: string = "";
  admin() {
    if(this.user != this.email && this.pas != this.password){
      this.router.navigate(['/admin']);
      Swal.fire(
        'Bienvenido administrador',
        `Usuario: ${this.user}`,
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
