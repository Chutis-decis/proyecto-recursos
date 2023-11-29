import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosEscolares } from 'src/app/datos_escolares/escolares';
import { EscolaresService } from 'src/app/service/escolar/escolares.service';

@Component({
  selector: 'app-escolares-baja',
  templateUrl: './escolares-baja.component.html',
  styleUrls: ['./escolares-baja.component.css']
})
export class EscolaresBajaComponent {
  escolares: DatosEscolares[] = [];
  escolar = new DatosEscolares();

  constructor(private escolarService: EscolaresService, private router: Router) { } // constructor

  ngOnInit(): void {
    this.getEscolares();
  }

  getEscolares(): void {
    this.escolarService.obtenerEscolar().subscribe(
      (escolares) => this.escolares = escolares
    );
  }

  getEscolaresDetails(): void{
      this.getEscolares();
    
    this.router.navigate(['/detalle-escolares']);
  }
}
