import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfilamiento } from 'src/app/perfilamiento';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfilamiento',
  templateUrl: './perfilamiento.component.html'
})
export class PerfilamientoComponent {
  perfilamiento: Perfilamiento[] = [];
  perf: Perfilamiento= new Perfilamiento();


  constructor(private ingresoService: IngresoService, private route: Router, private activatedRouter: ActivatedRoute){}

  ngOnInit(): void {
    this.getPerfilamiento();
    this.cargar();
  }

  cargar(): void{
    this.activatedRouter.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.ingresoService.getByIdPerfilamiento(id).subscribe((perfilamiento) => this.perf = perfilamiento)
      }
    });
  }

  /* Metodo para la obtencion de PERFILAMIENTO */
  getPerfilamiento(){
    this.ingresoService.obtencionPerfilamientoIngreso().subscribe(data => {
      this.perfilamiento = data;
      console.log(this.perfilamiento);
    });
  }

  create():void{
    console.log(this.perf);
    this.ingresoService.createIngresoPerfilamiento(this.perf).subscribe(
      res=> {
        this.getPerfilamiento();
        this.route.navigate(['/datos-ingreso/perfilamiento'])
        Swal.fire('Agregaste un Perfilamiento', `Perfilamiento Agregado Correctamente`, 'success');
      }
    );
  }

  update():void{
    this.ingresoService.editarIngresoPerfilamiento(this.perf).subscribe(
      e=> {
        this.route.navigate(['/datos-ingreso/perfilamiento'])
        Swal.fire('Editaste un Perfilamiento', `Editaste un dato de tipo perfilamiento`, 'success');
      }
    );
  }
  deletePerfilamineto(perfilamiento: Perfilamiento): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea mover a el perfilamiento ${perfilamiento.nombrePerfilamiento} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, mover',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.ingresoService.eliminarPerfilamiento(perfilamiento).subscribe(
          res => {
            this.perfilamiento = this.perfilamiento.filter(b => b !== perfilamiento)
            Swal.fire('Perfilamiento Movido', `Perfilamiento ${perfilamiento.nombrePerfilamiento} movido con éxito`, 'success');
          }
        )
      }
    })
  }
}
