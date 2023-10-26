import { Component } from '@angular/core';
import { Escolares } from 'src/app/escolares';

@Component({
  selector: 'app-registro-datos-personales',
  templateUrl: './registro-datos-personales.component.html',
  styleUrls: ['./registro-datos-personales.component.css']
})
export class RegistroDatosPersonalesComponent {
  escolares = new Escolares();
}
