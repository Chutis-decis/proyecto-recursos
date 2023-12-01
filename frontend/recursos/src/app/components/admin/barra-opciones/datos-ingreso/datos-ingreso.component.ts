import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosIngreso } from 'src/app/ingreso';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datos-ingreso',
  templateUrl: './datos-ingreso.component.html',
  styleUrls: ['./datos-ingreso.component.css']
})
export class DatosIngresoComponent implements OnInit {
  /* Atributos y objetos */
  ingreso: DatosIngreso = new DatosIngreso();
  ingresados: DatosIngreso[] = [];

  searchTerm: string;
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
  deleteIngreso(ingreso: DatosIngreso): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que deseas mover el trámite ${ingreso.tramite.nombreTramite} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, mover',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.serviceIngreso.deleted(ingreso).subscribe(
          res => {
            this.ingresados = this.ingresados.filter(b => b !== ingreso)
            Swal.fire('Datos Ingreso Movido', `Datos de Ingreso ${ingreso.tramite.nombreTramite} eliminada con éxito`, 'success');
          }
        )
      }
    })
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
