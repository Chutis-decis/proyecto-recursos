import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingreso } from 'src/app/ingreso';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';

@Component({
  selector: 'app-registro-datos-ingreso',
  templateUrl: './registro-datos-ingreso.component.html',
  styleUrls: ['./registro-datos-ingreso.component.css']
})
export class RegistroDatosIngresoComponent implements OnInit {
  /* Atributos y Objetos */
  ingreso: Ingreso = new Ingreso();
  ingresados: Ingreso[];

  /* Constructor */
  constructor(private ingresoService: IngresoService, private route: Router, private activateRouter: ActivatedRoute) { }

  /* Obetener */
  getAll():void{
    this.ingresoService.obtenerIngreso().subscribe(
      e=> this.ingresados = e
    )
  }

  /* Crear */
  create():void{
  console.log(this.ingreso);
    this.ingresoService.createIngreso(this.ingreso).subscribe(
      res=> this.getAll()
    );
    this.route.navigate(['/aspirante'])
  }

  ngOnInit(): void {
    this.cargar();
  }


  /* Nos servira para mostrar los datos registrados */
  cargar(){
    this.activateRouter.params.subscribe(e => {
      let id = e['id'];
      if(id){
        this.ingresoService.getById(id).subscribe(data => this.ingreso=data);
      }
    });
  }


  update():void{
    this.ingresoService.editarIngreso(this.ingreso.id, this.ingreso).subscribe(
      e=> this.route.navigate(['/datos-ingreso'])
    );
  }
}
