import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { modalidadEscolar } from 'src/app/datos_escolares/ModalidadEscolar';
import { ModalidadService } from 'src/app/service/escolar/modalidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modalidad-escolar',
  templateUrl: './modalidad-escolar.component.html'
})
export class ModalidadEscolarComponent {

  /* Atributos */
  modalidad: modalidadEscolar [] = [];
  moda = new modalidadEscolar();
  
  /* Constructor */
  constructor(private serviceModalidadEscolar: ModalidadService, private route: Router, private activatedRouter: ActivatedRoute) { }

  /* Inicializacion */
  ngOnInit(): void {
    this.getModalidad();
    this.cargar();
  }

  cargar(): void{
    this.activatedRouter.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.serviceModalidadEscolar.getModalidadById(id).subscribe((modalidad) => this.moda = modalidad)
      }
    });
  }

  /* Metodo para la obtencion de la modalidad*/
  getModalidad(){
    this.serviceModalidadEscolar.getModalidad().subscribe(data => {
      this.modalidad = data;
      console.log(this.modalidad);
    });
  }

  /* Crear modalidad  */
  create():void{
    console.log(this.moda);
    this.serviceModalidadEscolar.create(this.moda).subscribe(
      res => {
        this.getModalidad();
        this.route.navigate(['/datos-escolares/modalidad-escolar']);
        Swal.fire('Nueva Modalidad', `${res.nombre}`, 'success');
      }
    );
  }
  

  //Editar modalidad
  update():void{
    this.serviceModalidadEscolar.editarModalidad(this.moda).subscribe(
      e=> {
        this.route.navigate(['/datos-escolares/modalidad-escolar']);
        Swal.fire('Modalidad Actualizada', `${this.moda.nombre}`, 'success');
      }
    );
  }


  /* Delete */
  delete(modalidad: modalidadEscolar): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea dar de baja la modalidad escolar ${modalidad.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, dar de baja',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.serviceModalidadEscolar.deleteModalidad(modalidad).subscribe(
          res => {
            this.modalidad = this.modalidad.filter(b => b !== modalidad)
            Swal.fire('Modalidad Escolar Dada de Baja', `Modalidad Escolarizada ${modalidad.nombre} dada de baja con éxito`, 'success');
          }
        )
      }
    })
  }
}
