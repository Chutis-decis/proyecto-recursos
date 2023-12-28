import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutor } from 'src/app/FTD/Tutor';
import { FtdService } from 'src/app/service/ftd/ftd.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html'
})
export class TutorComponent {
  tutor: Tutor[] = [];
  tutores = new Tutor();

  constructor(private serviceTutor: FtdService, private route: Router, private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTutor();
    this.cargar();
  }

  cargar(): void{
    this.activateRouter.params.subscribe(e => {
      let id = e['id'];
      if(id){
        this.serviceTutor.getByIdTutor(id).subscribe(data => this.tutores=data);
      }
    });
  }

  getTutor(){
    this.serviceTutor.obtenerTutor().subscribe(tutor => this.tutor = tutor);
  }

  create(){
    console.log(this.tutores);
    this.serviceTutor.createDatosFTDTutor(this.tutores).subscribe(
      res=> {
        this.getTutor();
      Swal.fire('Nuevo Tutor', `Tutor creado con éxito`, 'success');
      this.route.navigate(['/datos-ftd/tutor']);
      }
    );
  }

  update(): void{
    console.log(this.tutores);
    this.serviceTutor.editarDatosFTDTutor(this.tutores).subscribe(
      res=> {
      this.route.navigate(['/datos-ftd/tutor']);
      Swal.fire('Tutor Actualizado', `Tutor actualizado con éxito`, 'success');
      }
    );
  }

  delete(tutores: Tutor): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea dar de baja al tutor ${tutores.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, dar de baja',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.serviceTutor.deletedDatosFTDTutor(tutores).subscribe(
          res => {
            this.tutor = this.tutor.filter(b => b !== tutores)
            Swal.fire('Tutor Dado de Baja', `Tutor ${tutores.nombre} dado de baja  con éxito`, 'success');
          }
        )
      }
    })
  }
}
