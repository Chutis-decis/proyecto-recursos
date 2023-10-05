import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aspirantes',
  templateUrl: './aspirantes.component.html',
  styleUrls: ['./aspirantes.component.css']
})
export class AspirantesComponent {

  /* Constructor */
  constructor(private route: Router) { this.route = route }

  formAspirante() {
    this.route.navigate(['/form-aspirante']);
  }

  ayuda(){
    this.route.navigate(['/ayuda']);
  }
}
