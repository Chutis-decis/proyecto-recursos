import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingreso } from 'src/app/ingreso';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';
import { Tramite } from 'src/app/tramite';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tramite',
  templateUrl: './tramite.component.html',
  styleUrls: ['./tramite.component.css']
})
export class TramiteComponent {
  /* Atributos */
  tramite: Tramite [] = []
  tra: Tramite = new Tramite();
  ingreso: Ingreso = new Ingreso();

  /* Constructor */
  constructor(private ingresoService: IngresoService, private route: Router, private activatedRouter: ActivatedRoute){}


  ngOnInit(): void {
    this.getTramite();
    this.cargar();
  }

  cargar(): void{
    this.activatedRouter.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.ingresoService.getByIdTramite(id).subscribe((tramite) => this.tra = tramite)
      }
    });
  }


  getTramite(){
    this.ingresoService.obtencionTramiteIngreso().subscribe(data => {
      this.tramite = data;
      console.log(this.tramite);
    });
  }
  
  create():void{
    console.log(this.tra);
    this.ingresoService.createIngresoTramite(this.tra).subscribe(
      res=> this.getTramite()
    );
    this.route.navigate(['/datos-ingreso/tramite'])
  }

  update(){
    this.ingresoService.editarIngresoTramite(this.tra).subscribe(
      data => {
        this.route.navigate(['/datos-ingreso/tramite'])
        Swal.fire('Editaste un Tramite', `Editaste un dato de tipo tramite`, 'success');
      },
      error => console.log(error)
      );
  }


  deletePerfilamineto(tramite: Tramite){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Estas Seguro?",
      text: `¿Seguro que desea eliminar el tramite ${tramite.nombreTramite}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.ingresoService.eliminarTramite(tramite).subscribe(
          response => {
            this.tramite = this.tramite.filter(cli => cli !== tramite)
            swalWithBootstrapButtons.fire({
              title: "Universidad Eliminada",
              text: `Trámite ${tramite.nombreTramite} eliminado con éxito!`,
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
          text: "Cancelado parra el guardado de los datos del trámite:)",
          icon: "error"
        });
      }
    });
  }
}
