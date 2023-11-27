import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Universidad } from 'src/app/datos_escolares/Universidad';
import { Escolares } from 'src/app/datos_escolares/escolares';
import { EscolaresService } from 'src/app/service/escolar/escolares.service';
import { UniversidadService } from 'src/app/service/escolar/universidad.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.component.html',
  styleUrls: ['./universidad.component.css']
})
export class UniversidadComponent {
  /* Atributos */
  universidad: Universidad [] = [];
  uni: Universidad = new Universidad();

  escolarUni: Escolares = new Escolares();
  /* Constructor */
  constructor(private uniService: UniversidadService, private  route: Router, private escService: EscolaresService, private activatedRouter: ActivatedRoute) { }

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
        this.route.navigate(['/datos-escolares/universidad']);
        Swal.fire('Nueva Universidad', `${create.nombre}`, 'success');
      }
    );
  }

  /* Eliminar */
  deleteUni(universidad: Universidad): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Estas Seguro?",
      text: `¿Seguro que desea eliminar a la universidad ${universidad.nombre}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.uniService.deleteUniversidad(universidad).subscribe(
          response => {
            this.universidad = this.universidad.filter(cli => cli !== universidad)
            swalWithBootstrapButtons.fire({
              title: "Universidad Eliminada",
              text: `Universidad ${universidad.nombre} eliminado con éxito!`,
              icon: "success"
            });
          }
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelado",
          text: "Cancelado parra el guardado de los datos de la universidad :)",
          icon: "error"
        });
      }
    });
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
}
