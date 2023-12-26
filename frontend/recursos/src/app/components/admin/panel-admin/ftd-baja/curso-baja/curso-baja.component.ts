import { Component } from '@angular/core';
import { Curso } from 'src/app/FTD/Curso';
import { FtdService } from 'src/app/service/ftd/ftd.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-curso-baja',
  templateUrl: './curso-baja.component.html'
})
export class CursoBajaComponent {
  curso: Curso [] = [];
  course = new Curso();

  constructor(private courseService: FtdService) { }

  ngOnInit(): void {
    this.getCurso();
  }
  getCurso(): void{
    this.courseService.obtenerCurso().subscribe(curso => this.curso = curso);
  }

  delete(course: Curso): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea activar el curso ${course.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, activar',
      cancelButtonText: 'No, cancelar',
      cancelButtonColor: '#d33',
      confirmButtonColor: '#3085d6'
    }).then((result) => {
      if (result.value) {
        this.courseService.activatedDatosFTDCurso(course).subscribe(
          res => {
            this.getCurso();
            Swal.fire(
              'Curso activiado',
              `Curso ${course.nombre} activado con éxito`,
              'success'
            );
          }
        );
      }
    });
  }
}
