import { Component } from '@angular/core';
import { DatosIngreso } from 'src/app/ingreso';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';

@Component({
  selector: 'app-ingreso-baja',
  templateUrl: './ingreso-baja.component.html',
  styleUrls: ['./ingreso-baja.component.css']
})
export class IngresoBajaComponent {
  /* Atributos y Objetos */
  ingreso: DatosIngreso [];
  ingresar = new DatosIngreso();

  /* Constructor */
  constructor(private ingresoService: IngresoService) { }
}
