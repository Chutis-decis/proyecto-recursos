import { Component } from '@angular/core';
import { CPanel } from '../../CPanel';

@Component({
  selector: 'app-personales-baja',
  templateUrl: './personales-baja.component.html',
  styleUrls: ['./personales-baja.component.css']
})
export class PersonalesBajaComponent {
  alumno: CPanel[];
}
