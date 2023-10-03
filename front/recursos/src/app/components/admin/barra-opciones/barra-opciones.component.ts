import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-opciones',
  templateUrl: './barra-opciones.component.html',
  styleUrls: ['./barra-opciones.component.css']
})
export class BarraOpcionesComponent {
  
    constructor(private router:Router) {}
  
    ngOnInit(): void {
    }
    inicio(){
      this.router.navigate(['/admin']);
    }
    login(){
      this.router.navigate(['/login']);
    }
    repor (){
      this.router.navigate(['/admin/reportes']);
    }
}
