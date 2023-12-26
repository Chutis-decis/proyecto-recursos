import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { planEducativo } from 'src/app/datos_escolares/planEducativo';
import { PlanEducativoService } from 'src/app/service/escolar/plan-educativo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-plan-educativo-baja',
  templateUrl: './plan-educativo-baja.component.html'
})
export class PlanEducativoBajaComponent {
  planEducativo: planEducativo [] = [];
  plan = new planEducativo();

  constructor(private planService: PlanEducativoService, private activatedRouter: ActivatedRoute) { }

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

  delete(plan: planEducativo): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea mover el Plan Educativo ${plan.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, mover',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.planService.activatedPlan(plan).subscribe(
          res => {
            this.planEducativo = this.planEducativo.filter(b => b !== plan)
            Swal.fire('Plan Educativo Movido', `Plan Educativo ${plan.nombre} movido con éxito`, 'success');
          }
        )
      }
    })
  }
  
}
