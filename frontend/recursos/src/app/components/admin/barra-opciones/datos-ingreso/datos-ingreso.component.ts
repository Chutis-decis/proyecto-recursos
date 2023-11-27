import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingreso } from 'src/app/ingreso';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';

@Component({
  selector: 'app-datos-ingreso',
  templateUrl: './datos-ingreso.component.html',
  styleUrls: ['./datos-ingreso.component.css']
})
export class DatosIngresoComponent implements OnInit {
  /* Atributos y objetos */
  ingreso: Ingreso = new Ingreso();
  ingresados: Ingreso[] = [];

  /* Constructor */
  constructor(private serviceIngreso: IngresoService, private activatedRouter: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.getAllIngreso();
    this.cargar();
  }

  /* Obtencion de los datos de ingreso */
  getAllIngreso(){
    this.serviceIngreso.obtenerIngreso().subscribe(data => {
      this.ingresados = data;
    });
  }
  cargar(){
    this.activatedRouter.params.subscribe(e => {
      let id = e['id'];
      if(id){
        this.serviceIngreso.getById(id).subscribe(data => this.ingreso=data);
      }
    });
  }

  /* Deleted */
  /* Eliminacion de los datos de ingreso */
  deleteIngreso(id: number): void{
    this.serviceIngreso.deleted(id).subscribe(data => {
      console.log("Alumno eliminado", data);
      this.getAllIngreso;
    });
  }

  /* Modificar */
  update():void{
    this.serviceIngreso.editarIngreso(this.ingreso).subscribe(
      e=> this.route.navigate(['/registro-datos-ingreso'])
    );
  }

  obtenerIngreso(): void{
    this.getAllIngreso();
    this.route.navigate(['/detalle-ingreso']);
  }
}
