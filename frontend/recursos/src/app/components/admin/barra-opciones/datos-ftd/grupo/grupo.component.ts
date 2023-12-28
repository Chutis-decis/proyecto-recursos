import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grupo } from 'src/app/FTD/Grupo';
import { FtdService } from 'src/app/service/ftd/ftd.service';
import { MatriculaService } from 'src/app/service/matricula/matricula.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html'
})
export class GrupoComponent {

  grupo: Grupo[] = [];
  group = new Grupo();


  constructor(private serviceGrupo: FtdService, private router: Router, private activatedRouter: ActivatedRoute, private matriculaService: MatriculaService) { }

  ngOnInit(): void {
    this.getGrupo();
    this.cargar();
  }

  /* Obtencion del grupo */
  getGrupo(): void{
    this.serviceGrupo.obtenerGrupo().subscribe(grupo => this.grupo = grupo);
  }

  cargar(): void{
    this.activatedRouter.params.subscribe(e => {
      let id = e['id'];
      if(id){
        this.serviceGrupo.getByIdGrupo(id).subscribe(data => this.group=data);
      }
    });
  }

  create(){
    console.log(this.group);
    this.serviceGrupo.createDatosFTDGrupo(this.group).subscribe(
      res=> {
        this.getGrupo();
        Swal.fire('Nuevo Grupo', `Grupo creado con éxito`, 'success');
      this.router.navigate(['/datos-ftd/grupo']);
      }
    );
  }

  update(): void{
    console.log(this.group);
    this.serviceGrupo.editarDatosFTDGrupo(this.group).subscribe(
      res=> {
        Swal.fire('Grupo Actualizado', `Grupo actualizado con éxito`, 'success');
      this.router.navigate(['/datos-ftd/grupo']);
      }
    );
  }

  delete(group: Grupo): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea mover el grupo ${group.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, mover',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.serviceGrupo.deletedDatosFTDGrupo(group).subscribe(
          response => {
            this.grupo = this.grupo.filter(servi => servi !== group)
            Swal.fire(
              'Grupo Movido',
              `Grupo ${group.nombre} movido con éxito`,
              'success'
            )
          }
        )
      }
    });
  }


  actualizarIdGrupo() {
    this.matriculaService.idGrupo = this.group.id.toString();
  }
}
