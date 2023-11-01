import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escolares } from 'src/app/escolares';
import { EscolaresService } from 'src/app/service/escolar/escolares.service';

@Component({
  selector: 'app-registro-datos-personales',
  templateUrl: './registro-datos-personales.component.html',
  styleUrls: ['./registro-datos-personales.component.css']
})
export class RegistroDatosPersonalesComponent {
  escolares = new Escolares();
  escolar : Escolares[];

  constructor(private ecolarService: EscolaresService, private route: Router, private activateRouter: ActivatedRoute) { }

  getAll():void{
    this.ecolarService.obtenerEscolar().subscribe(
      e=> this.escolar = e
    )
  }

  ngOnInit(): void {
    this.cargar();
  }

  cargar(){
    this.activateRouter.params.subscribe(e => {
      let id = e['id'];
      if(id){
        this.ecolarService.getById(id).subscribe(data => this.escolares=data);
      }
    });
  }

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
