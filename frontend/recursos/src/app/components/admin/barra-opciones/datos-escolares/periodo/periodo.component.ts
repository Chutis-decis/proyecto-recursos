import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Periodo } from 'src/app/datos_escolares/Periodo';
import { PeriodoService } from 'src/app/service/escolar/periodo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrls: ['./periodo.component.css']
})
export class PeriodoComponent {
  periodo: Periodo = new Periodo();
  periodos: Periodo[] = [];

  constructor(private periodoService: PeriodoService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPeriodo();
    this.cargar();
  }

  getPeriodo(){
    this.periodoService.getPeriodo().subscribe(data => {
      this.periodos = data;
    })
  }

  cargar(): void{
    this.activatedRouter.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.periodoService.getPeriodoById(id).subscribe((periodo) => this.periodo = periodo)
      }
    });
  }

  create(){
    this.periodoService.createPeriodo(this.periodo).subscribe(res => {
      this.getPeriodo();
      this.router.navigate(['/datos-escolares/periodo'])
      Swal.fire('Nuevo Periodo', `${this.periodo.nombre}`, 'success');
    });
  }

  update(){
    this.periodoService.editarPeriodo(this.periodo).subscribe(res => {
      this.getPeriodo();
      this.router.navigate(['/datos-escolares/periodo'])
      Swal.fire('Periodo Actualizado', `${this.periodo.nombre}`, 'success');
    });
  }

  delete(periodo: Periodo){
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar el Periodo ${periodo.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if(result.value){
        this.periodoService.deletePeriodo(periodo).subscribe(
          res => {
            this.getPeriodo();
            Swal.fire('Periodo Eliminado', `${periodo.nombre}`, 'success');
          }
        )
      }
    })
  }
}
