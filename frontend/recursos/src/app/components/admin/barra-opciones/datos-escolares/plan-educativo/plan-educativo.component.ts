import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { planEducativo } from 'src/app/datos_escolares/planEducativo';
import { PlanEducativoService } from 'src/app/service/escolar/plan-educativo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-plan-educativo',
  templateUrl: './plan-educativo.component.html'
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
        this.getPlanEducativo();
        this.route.navigate(['/datos-escolares/plan-educativo'])
        Swal.fire('Nuevo Plan Educativo', `${res.nombre}`, 'success');
      }
    );
  }

  /* Delete */
  /* Eliminar */
  delete(plan: planEducativo): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar el Plan Educativo ${plan.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.planService.deletePlan(plan).subscribe(
          res => {
            this.planEducativo = this.planEducativo.filter(b => b !== plan)
            Swal.fire('Plan Educativo Eliminado', `Plan Educativo ${plan.nombre} eliminado con éxito`, 'success');
          }
        )
      }
    })
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
