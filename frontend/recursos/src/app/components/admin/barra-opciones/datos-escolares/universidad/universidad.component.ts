import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Universidad } from 'src/app/datos_escolares/universidad';
import { DatosEscolares } from 'src/app/datos_escolares/escolares';
import { EscolaresService } from 'src/app/service/escolar/escolares.service';
import { UniversidadService } from 'src/app/service/escolar/universidad.service';
import { MatriculaService } from 'src/app/service/matricula/matricula.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.component.html'
})
export class UniversidadComponent {
  /* Atributos */
  universidad: Universidad [] = [];
  uni: Universidad = new Universidad();

  escolarUni: DatosEscolares = new DatosEscolares();
  /* Constructor */
  constructor(private uniService: UniversidadService, private  route: Router, private activatedRouter: ActivatedRoute, private matriculaService: MatriculaService) { }

  /* Inicializacion */
  ngOnInit(): void {
    this.getUniversidad();
    this.cargar();
  }

  cargar(): void{
    this.activatedRouter.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.uniService.getUniversidadById(id).subscribe((universidad) => this.uni = universidad)
      }
    });
  }

  /* Metodo para la obtencion de la universidad */
  getUniversidad(){
    this.uniService.getUniversidad().subscribe(data => {
      this.universidad = data;
      console.log(this.universidad);
    });
  }

  create():void{
    console.log(this.uni);
    this.uniService.createUniversidad(this.uni).subscribe(
      create => {
        this.getUniversidad();
        this.route.navigate(['/datos-escolares/universidad']);
        Swal.fire('Nueva Universidad', `${create.nombre}`, 'success');
      }
    );
  }

  /* Eliminar */
  deleteUni(university: Universidad): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea mover la universidad ${university.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, dar de baja',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.uniService.deleteUniversidad(university).subscribe(
          res => {
            this.universidad = this.universidad.filter(b => b !== university)
            Swal.fire('Univiersidad Movida', `Universidad ${university.nombre} movida con éxito`, 'success');
          }
        )
      }
    })
  }
  /* Editar Universidad */
  /* Actializacion */
  editarUniversidad(): void {
    this.uniService.editarUniversidad(this.uni).subscribe(
      res => {
        Swal.fire('Universidad Actualizada', 'success');
        this.route.navigate(['/datos-escolares/universidad']);
      },
      err => console.log('Error al actualizar los datos de universidad')
    );
  }

  actualizarUniversidad() {
    this.matriculaService.idUniversidad = this.uni.id.toString();
  }
}
