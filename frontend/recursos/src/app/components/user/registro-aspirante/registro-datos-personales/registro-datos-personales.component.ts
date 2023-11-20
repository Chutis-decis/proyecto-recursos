import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escolares } from 'src/app/datos_escolares/escolares';
import { modalidadEscolar } from 'src/app/datos_escolares/ModalidadEscolar';
import { planEducativo } from 'src/app/datos_escolares/planEducativo';
import { Universidad } from 'src/app/datos_escolares/Universidad';
import { EscolaresService } from 'src/app/service/escolar/escolares.service';

@Component({
  selector: 'app-registro-datos-personales',
  templateUrl: './registro-datos-personales.component.html',
  styleUrls: ['./registro-datos-personales.component.css']
})
export class RegistroDatosPersonalesComponent {
  escolares = new Escolares();
  escolar : Escolares[];
  modalidad: modalidadEscolar[];
  modalidades: modalidadEscolar = new modalidadEscolar();
  planEducativo: planEducativo[];
  planes: planEducativo = new planEducativo();
  universidad: Universidad[];
  universidades: Universidad = new Universidad();

  /* Constructor */
  constructor(private ecolarService: EscolaresService, private route: Router, private activateRouter: ActivatedRoute) { }

  getAll():void{
    this.ecolarService.obtenerEscolar().subscribe(
      e=> this.escolar = e
    )
  }

  /* obtener Perfilamiento */
  getPlanEducativo(): void{
    this.ecolarService.getPlanEducativo().subscribe(planEduca => 
      this.planEducativo = planEduca);
  }

  getModalidadEscolar(): void{
    this.ecolarService.getModalidadEscolar().subscribe(mod => 
      this.modalidad = mod);
  }

  getUniversidad(): void{
    this.ecolarService.getUniversidad().subscribe(university =>
      this.universidad = university)
  }

  
  ngOnInit(): void {
    this.cargar();
    this.getPlanEducativo();
    this.getModalidadEscolar();
    this.getUniversidad();
  }

  /* Cargar los datos escolares */
  cargar(){
    this.activateRouter.params.subscribe(e => {
      let id = e['id'];
      if(id){
        this.ecolarService.getById(id).subscribe(data => this.escolares=data);
      }
    });
  }
  

  /* GGuardar los datos escolares */
  create():void{
    console.log(this.escolares);
    this.ecolarService.createEscolar(this.escolares).subscribe(
      res=> this.getAll()
    );
    this.route.navigate(['/registro-datos-ingreso'])
  }

  update():void{
    this.ecolarService.editarEscolar(this.escolares.id, this.escolares).subscribe(
      e=> this.route.navigate(['/datos-escolares'])
    );
  }

  compararModalidad(modalida1: modalidadEscolar, modalidad2: modalidadEscolar): boolean{
    if(modalida1 === undefined && modalidad2 === undefined){
      return true;
    }
    return modalida1 === null || modalidad2 === null || modalida1 === undefined || modalidad2 === undefined ? false : modalida1.id === modalidad2.id;
  }

  compararPlanEducativo(plan1: planEducativo, plan2: modalidadEscolar): boolean{
    if(plan1 === undefined && plan2 === undefined){
      return true;
    }
    return plan1 === null || plan2 === null || plan1 === undefined || plan2 === undefined ? false : plan1.id === plan2.id;
  }

  compararUniversidad(uni1: Universidad, uni2: Universidad): boolean{
    if(uni1 === undefined && uni2 === undefined){
      return true;
    }
    return uni1 === null || uni2 === null || uni1 === undefined || uni2 === undefined ? false : uni1.id === uni2.id;
  }
}
