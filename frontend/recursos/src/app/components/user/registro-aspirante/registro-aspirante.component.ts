import { Component, OnInit } from '@angular/core';
import { CPanel } from '../../admin/CPanel';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from 'src/app/service/alumno/alumno.service';
import { DatosEscolares } from 'src/app/datos_escolares/escolares';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-aspirante',
  templateUrl: './registro-aspirante.component.html',
  styleUrls: ['./registro-aspirante.component.css']
})
export class RegistroAspiranteComponent implements OnInit{
  /* Atributo para crear un nuevo estudiante */
  estudiante : CPanel = new CPanel();
  estudiantes: CPanel[];

  id: number;
  nuevoUsername: string;
  nuevaPassword: string;
  /* Atributo para crear un nuevo dato escolar */
  escolares: DatosEscolares = new DatosEscolares();

  actualizar() {
    this.actualizarUsername();
    this.actualizarPassword();
    this.update();
}

actualizarUsername() {
    this.alumnoService.actualizarUsername(this.estudiante.id, this.estudiante.username).subscribe(() => {
        console.log('Nombre de usuario actualizado correctamente.');
    }, error => {
        console.error('Error al actualizar el nombre de usuario:', error);
    });
}

actualizarPassword() {
    this.alumnoService.actualizarPassword(this.estudiante.id, this.estudiante.password).subscribe(() => {
        console.log('Contraseña actualizada correctamente.');
    }, error => {
        console.error('Error al actualizar la contraseña:', error);
    });
}
actualizarDatosPersonales(): void {
  this.estudiante.username = this.nuevoUsername;
  this.estudiante.password = this.nuevaPassword;

  this.alumnoService.actualizarDatosPersonales(this.id, this.estudiante).subscribe(
    data => console.log(data),
    error => console.log(error)
  );
}
  /* Constructor */
  constructor(private route: Router, public alumnoService: AlumnoService, private activateRouter: ActivatedRoute) { this.route = route }

  getAll():void{
    this.alumnoService.obtenerAlumnos().subscribe(
      e=> this.estudiantes = e
    )
  }

  create():void{
    this.alumnoService.createAlumno(this.estudiante).subscribe(
      res=> {this.route.navigate(['/registro-datos-escolares'])
      Swal.fire('Nuevo usuario', `Usuario ${this.estudiante.nombres} creado con exito!`, 'success')
    }
    );
  }

  ngOnInit(): void {
    this.cargar();
  }

  /* Nos servira para mostrar los datos registrados */
  cargar(){
    this.activateRouter.params.subscribe(e => {
      let id = e['id'];
      if(id){
        this.alumnoService.getById(id).subscribe(data => this.estudiante=data);
      }
    });
  }
  
  update():void{
    this.alumnoService.editarAlumno(this.estudiante.id, this.estudiante).subscribe(
      e=> {
        this.route.navigate(['/admin'])
        Swal.fire('Usuario actualizado', `Usuario ${this.estudiante.nombres} actualizado con exito!`, 'success')
      }
    );
  }
}
