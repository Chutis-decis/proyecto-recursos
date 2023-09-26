import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-aspirante',
  templateUrl: './nuevo-aspirante.component.html',
  styleUrls: ['./nuevo-aspirante.component.css']
})
export class NuevoAspiranteComponent {
  constructor(private route:Router) { this.route = route; }

  aspirante(){
    this.route.navigate(['/alumno']);
  }
  ayuda(){
    this.route.navigate(['/ayuda']);
  }
}
