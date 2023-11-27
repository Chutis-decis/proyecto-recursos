import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { planEducativo } from 'src/app/datos_escolares/planEducativo';
import { PlanEducativoService } from 'src/app/service/escolar/plan-educativo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-plan-educativo',
  templateUrl: './plan-educativo.component.html',
  styleUrls: ['./plan-educativo.component.css']
})
export class PlanEducativoComponent {
  /* Atributos */
  planEducativo: planEducativo [] = [];
  plan = new planEducativo();

  /* Constructor */
  constructor(private planService: PlanEducativoService, private route: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPlanEducativo();
    this.cargar();
  }

  cargar(): void{
    this.activatedRouter.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.planService.getPlanById(id).subscribe((plan) => this.plan = plan)
      }
    });
  }

  /* Metodo para la obtencion de la modalidad*/
  getPlanEducativo(){
    this.planService.getPlanEducativo().subscribe(data => {
      this.planEducativo = data;
      console.log(this.planEducativo);
    });
  }

  create():void{
    console.log(this.plan);
    this.planService.postPlan(this.plan).subscribe(
      res=> {
        this.route.navigate(['/datos-escolares/plan-educativo'])
        Swal.fire('Nuevo Plan Educativo', `${res.nombre}`, 'success');
      }
    );
  }

  /* Delete */
  /* Eliminar */
  delete(planEducativo: planEducativo): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Estas Seguro?",
      text: `¿Seguro que deseas eliminar al plan educativo: ${planEducativo.nombre}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.planService.deletePlan(planEducativo).subscribe(
          response => {
            this.planEducativo = this.planEducativo.filter(cli => cli !== planEducativo)
            swalWithBootstrapButtons.fire({
              title: "Plan Educativo Eliminado",
              text: `Plan Educativo ${planEducativo
                .nombre} eliminado con éxito!`,
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
          text: "Cancelado la eliminacion de plan educativo :)",
          icon: "error"
        });
      }
    });
  }

  /* Editar plan educativo() */
  update(): void {
    this.planService.editarPlan(this.plan).subscribe(resp => {
      this.route.navigate(['/datos-escolares/plan-educativo']);
      Swal.fire('Plan Educativo Actualizado', ` ${resp.nombre}`, 'success');
    }, 
    err => {
      console.error('Código del error desde el backend: ' + err.status);
    });
  }
}
