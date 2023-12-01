import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosEscolares } from 'src/app/datos_escolares/escolares';
import { EscolaresService } from 'src/app/service/escolar/escolares.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-escolares-baja',
  templateUrl: './escolares-baja.component.html',
  styleUrls: ['./escolares-baja.component.css']
})
export class EscolaresBajaComponent {
  escolares: DatosEscolares[] = [];
  escolar = new DatosEscolares();
  
  searchTerm: string = '';
  
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

  ativar(escolar: DatosEscolares): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que deseas activar al alumno ${escolar.datosPersonales}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, activar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        escolar.activo = true;
        this.escolarService.activated(escolar).subscribe(
          res => {
            this.escolares = this.escolares.filter(b => b !== escolar)
            Swal.fire('Alumno Activado', `Alumno ${escolar.datosPersonales} activado con éxito`, 'success');
          }
        )
      }
    })
  }
}
