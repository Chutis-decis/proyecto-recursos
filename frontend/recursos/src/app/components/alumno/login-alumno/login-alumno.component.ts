import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/auth/Usuario';
import { AuthService } from 'src/app/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.component.html',
  styleUrls: ['./login-alumno.component.css']
})
export class LoginAlumnoComponent {

  usuario: Usuario = new Usuario();

  constructor(private route: Router, private authService: AuthService) { }

  login() {
    this.authService.iniciarSesion(this.usuario.username, this.usuario.password).subscribe(
      response => {
        // Aquí puedes manejar la lógica de éxito de inicio de sesión
        console.log(response);
        Swal.fire('Inicio de Sesión Exitoso', '¡Bienvenido!', 'success');
        this.route.navigate(['/panel-alumno']);
      },
      error => {
        // Aquí puedes manejar la lógica de error de inicio de sesión
        console.error(error);
        Swal.fire('Error de Inicio de Sesión', 'Credenciales incorrectas', 'error');
      }
    );
  }
}
