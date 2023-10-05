import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-opciones',
  templateUrl: './barra-opciones.component.html',
  styleUrls: ['./barra-opciones.component.css']
})
export class BarraOpcionesComponent {
  /* Constructor */
  constructor(private router: Router) { this.router = router }

  inicio() {
    this.router.navigate(['/home']);
  }


}
