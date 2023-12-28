import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/FTD/Curso';
import { FtdService } from 'src/app/service/ftd/ftd.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html'
})
export class CursosComponent {
  
  curso: Curso [] = [];
  course = new Curso();

    constructor(private route: Router, private courseService: FtdService, private activatedRouter: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.getCurso();
      this.cargar();
    }

    getCurso(): void{
      this.courseService.obtenerCurso().subscribe(curso => this.curso = curso);
    }

    cargar(): void{
      this.activatedRouter.params.subscribe(e => {
        let id = e['id'];
        if(id){
          this.courseService.getByIdCurso(id).subscribe(data => this.course=data);
        }
      });
    }

    create(){
      console.log(this.course);
      this.courseService.createDatosFTDCurso(this.course).subscribe(
        res=> {
          this.getCurso();
          Swal.fire('Nuevo Curso', `Curso creado con éxito`, 'success');
          this.route.navigate(['/datos-ftd/cursos']);
        }
      );
    }

    update(): void{
      console.log(this.course);
      this.courseService.editarDatosFTDCurso(this.course).subscribe(
        res=> {
          Swal.fire('Curso Actualizado', `Curso actualizado con éxito`, 'success');
          this.route.navigate(['/datos-ftd/cursos']);
        }
      );
    }

    delete(course: Curso): void{
      Swal.fire({
        title: '¿Está seguro?',
        text: `¿Seguro que desea mover el curso ${course.nombre}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, moverlo',
        cancelButtonText: 'No, cancelar',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6'
      }).then((result) => {
        if (result.value) {
          this.courseService.deletedDatosFTDCurso(course).subscribe(
            res => {
              this.getCurso();
              Swal.fire(
                'Curso movido',
                `Curso ${course.nombre} movido con éxito`,
                'success'
              );
            }
          );
        }
      });
    }
}
