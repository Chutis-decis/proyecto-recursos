import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosIngreso } from 'src/app/ingreso';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';
import { Tramite } from 'src/app/tramite';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tramite',
  templateUrl: './tramite.component.html'
})
export class TramiteComponent {
  /* Atributos */
  tramite: Tramite [] = []
  tra: Tramite = new Tramite();
  ingreso: DatosIngreso = new DatosIngreso();

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
      res=>{
        this.getTramite();
        this.route.navigate(['/datos-ingreso/tramite'])
        Swal.fire('Agregaste un Tramite', `Tramite Agregado Correctamente`, 'success');
      }
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


  deleteTramite(tramite: Tramite): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea mover el trámite ${tramite.nombreTramite} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, mover',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.ingresoService.eliminarTramite(tramite).subscribe(
          res => {
            this.tramite = this.tramite.filter(b => b !== tramite)
            Swal.fire('Trámite Movido', `Trámite ${tramite.nombreTramite} movido con éxito`, 'success');
          }
        )
      }
    })
  }
}
