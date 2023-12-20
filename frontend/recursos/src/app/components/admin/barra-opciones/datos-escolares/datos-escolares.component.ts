import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosEscolares } from 'src/app/datos_escolares/escolares';
import { Universidad } from 'src/app/datos_escolares/Universidad';
import { EscolaresService } from 'src/app/service/escolar/escolares.service';
import Swal from 'sweetalert2';
import { CPanel } from '../../CPanel';

@Component({
  selector: 'app-datos-escolares',
  templateUrl: './datos-escolares.component.html'
})
export class DatosEscolaresComponent {
  /* Atributos */
  escolares: DatosEscolares[] = [];
  escolar = new DatosEscolares();
  universidad: Universidad[] = [];

  searchTerm: string = '';

  constructor(private serviceEstudiante:EscolaresService, private  activateRouter: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.getEscolar();
    this.cargar();
  }

  /* Mostrar los datos Escolares */
  getEscolar(){
    this.serviceEstudiante.obtenerEscolar().subscribe(data => {
      this.escolares = data;
    });
  }

  /* Modificacion de estos datos personales */
  cargar(){
    this.activateRouter.params.subscribe(e => {
      let id = e['id'];
      if(id){
        this.serviceEstudiante.getById(id).subscribe(data => this.escolar=data);
      }
    });
  }

  /* Actializacion */
  update():void{
    this.serviceEstudiante.editarEscolar(this.escolar.id, this.escolar).subscribe(
      e=> this.route.navigate(['/registro-datos-personales'])
    );
  }

  /* Eliminacion de los datos escolares */
  delete(escolar: DatosEscolares): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que deseas desactivar al alumno con el id: ${escolar.id} y la carrera de: ${escolar.carrera}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, desactivar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        escolar.activo = true;
        this.serviceEstudiante.deleted(escolar).subscribe(
          res => {
            this.escolares = this.escolares.filter(b => b !== escolar)
            Swal.fire('Alumno Activado', `Carrea ${escolar.carrera} desactivado con éxito`, 'success');
          }
        )
      }
    })
  }

  obtenerEscolares(): void{
    this.getEscolar();
    this.route.navigate(['/detalle-escolares']);
  }
}
