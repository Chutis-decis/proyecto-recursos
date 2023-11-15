import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { planEducativo } from 'src/app/datos_escolares/planEducativo';
import { PlanEducativoService } from 'src/app/service/escolar/plan-educativo.service';

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
  constructor(private planService: PlanEducativoService, private route: Router) { }

  ngOnInit(): void {
    this.getPlanEducativo();
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
      res=> this.getPlanEducativo()
    );
    this.route.navigate(['/datos-escolares/plan-educativo'])
  }

  /* Delete */
  /* Eliminar */
  deletePlan(id: number): void{
    this.planService.deletePlan(id).subscribe(data => {
      console.log("Alumno eliminado", data);
      this.getPlanEducativo();
    });
  }

  /* Update Modificación */
  update():void{
    this.planService.editarPlan(this.plan.id, this.plan).subscribe(
      e=> this.route.navigate(['/datos-escolares/plan-educativo'])
    );
  }
}
