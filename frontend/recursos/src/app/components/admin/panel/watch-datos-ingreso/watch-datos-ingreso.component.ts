import { Component, OnInit } from '@angular/core';
import { DatosIngreso } from 'src/app/ingreso';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';

@Component({
  selector: 'app-watch-datos-ingreso',
  templateUrl: './watch-datos-ingreso.component.html',
  styleUrls: ['./watch-datos-ingreso.component.css']
})
export class WatchDatosIngresoComponent implements OnInit{

  /* Atributos */
  ingreso: DatosIngreso = new DatosIngreso();
  ingresar: DatosIngreso[];


  /* Constructor */
  constructor(private serviceIngreso: IngresoService) { }

  /* ngOnInit */
  ngOnInit(): void {
    this.getIngreso();
  }

  /* metodo get */
  getIngreso(){
    this.serviceIngreso.obtenerIngreso().subscribe(data => {
      this.ingresar = data;
    });
  }
}
