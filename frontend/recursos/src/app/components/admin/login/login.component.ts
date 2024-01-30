import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/auth/Usuario';
import { AuthService } from 'src/app/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: Usuario = new Usuario();
  
  constructor(private router: Router, private authService: AuthService) {}

  login() {
    this.authService.iniciarSesion(this.usuario.username, this.usuario.password).subscribe(
      response => {
        // Aquí puedes manejar la lógica de éxito de inicio de sesión
        console.log(response);
        Swal.fire('Inicio de Sesión Exitoso', '¡Bienvenido!', 'success');
        this.router.navigate(['/admin']);
      },
      error => {
        // Aquí puedes manejar la lógica de error de inicio de sesión
        console.error(error);
        Swal.fire('Error de Inicio de Sesión', 'Credenciales incorrectas', 'error');
      }
    );
  }
}
