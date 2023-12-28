import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beca } from 'src/app/FTD/Beca';
import { FtdService } from 'src/app/service/ftd/ftd.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-beca',
  templateUrl: './beca.component.html'
})
export class BecaComponent {
  beca: Beca = new Beca();
  becas: Beca[] = [];

  constructor(private ftdService: FtdService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBecas();
    this.cargar();
  }

  getBecas(): void{
    this.ftdService.obtenerBecas().subscribe(becas => this.becas = becas);
  }

  cargar(): void{
    this.activatedRouter.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.ftdService.getByIdBecas(id).subscribe((becas) => this.beca = becas)
      }
    });
  }

  create(){
    console.log(this.beca);
    this.ftdService.createDatosFTDBecas(this.beca).subscribe(
      res=> {
      this.getBecas();
      this.router.navigate(['/datos-ftd/becas']);
      Swal.fire('Nueva Beca', `Beca creada con éxito`, 'success');
      }
    );
  }

  update(): void{
    console.log(this.beca);
    this.ftdService.editarDatosFTDBecas(this.beca).subscribe(
      res=> {
      this.router.navigate(['/datos-ftd/becas']);
      Swal.fire('Beca Actualizada', `Beca actualizada con éxito`, 'success');
      }
    );
  }

  delete(beca: Beca): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea mover la beca ${beca.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, mover',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.ftdService.deletedDatosFTDBecas(beca).subscribe(
          res => {
            this.becas = this.becas.filter(b => b !== beca)
            Swal.fire('Beca Movida', `Beca ${beca.nombre} movida con éxito`, 'success');
          }
        )
      }
    })
  }
}
