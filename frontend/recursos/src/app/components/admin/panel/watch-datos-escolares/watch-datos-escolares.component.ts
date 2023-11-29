import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosEscolares } from 'src/app/datos_escolares/escolares';
import { EscolaresService } from 'src/app/service/escolar/escolares.service';

@Component({
  selector: 'app-watch-datos-escolares',
  templateUrl: './watch-datos-escolares.component.html',
  styleUrls: ['./watch-datos-escolares.component.css']
})
export class WatchDatosEscolaresComponent {
  /* Atributos */
  ecolar = new DatosEscolares();
  escolar : DatosEscolares[];

  /* Constructor */
  constructor(private route: Router, private escolarService: EscolaresService) { }

  ngOnInit(): void {
    this.getEscolares();
  }

  /* Mostrar los datos Escolares */
  getEscolares(){
    this.escolarService.obtenerEscolar().subscribe(data => {
      this.escolar = data;
    });
  }

  /* Regresar pantalla anterior */
  regresar(){
    this.route.navigate(['/datos-escolares']);
  }
}
