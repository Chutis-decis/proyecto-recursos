import { Component } from '@angular/core';
import { Escolares } from 'src/app/escolares';
import { EscolaresService } from 'src/app/service/escolar/escolares.service';

@Component({
  selector: 'app-datos-escolares',
  templateUrl: './datos-escolares.component.html',
  styleUrls: ['./datos-escolares.component.css']
})
export class DatosEscolaresComponent {
  /* Atributos */
  escolares: Escolares[] = [];

  constructor(private serviceEstudiante:EscolaresService ) { }

  ngOnInit(): void {
    this.getEsolares();
  }
  private getEsolares(){
    this.serviceEstudiante.obtenerEscolar().subscribe(data => {
      this.escolares = data;
    });
  }
}
