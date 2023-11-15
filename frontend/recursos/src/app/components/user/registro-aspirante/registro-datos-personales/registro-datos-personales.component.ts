import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escolares } from 'src/app/datos_escolares/escolares';
import { modalidadEscolar } from 'src/app/datos_escolares/ModalidadEscolar';
import { planEducativo } from 'src/app/datos_escolares/planEducativo';
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
  modalidades: any;
  planEducativo: planEducativo[];

  constructor(private ecolarService: EscolaresService, private route: Router, private activateRouter: ActivatedRoute) { }

  getAll():void{
    this.ecolarService.obtenerEscolar().subscribe(
      e=> this.escolar = e
    )
  }

  getModalidad():void{
    this.ecolarService.getModalidadEscolar().subscribe(
      e=> this.escolar = e
    )
  }

  ngOnInit(): void {
    this.cargar();
    this.getModalidad();
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
}
