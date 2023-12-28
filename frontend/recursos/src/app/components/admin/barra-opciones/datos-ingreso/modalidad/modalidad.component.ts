import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'pdf-lib';
import { Modalidad } from 'src/app/modalidad';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-modalidad',
  templateUrl: './modalidad.component.html'
})
export class ModalidadComponent {
  /* Atributos */
  modalidad: Modalidad [] = [];
  mod: Modalidad = new Modalidad();
  editModalidad = {id: 0, nombre: ''}

  /* Constructor */
  constructor(private ingresoService: IngresoService, private route: Router, private activateRoute: ActivatedRoute){}
  
  ngOnInit(): void {
    this.getModalida();
    this.cargar();
  }

  cargar(): void{
    this.activateRoute.params.subscribe(e => {
      let id = e['id'];
      if(id){
        this.ingresoService.getByIdModalidad(id).subscribe(data => this.mod=data);
      }
    });
  }

  /* Metodos */
  /* Obtencion de los datos */
  getModalida(){
    this.ingresoService.obtencionModalidadIngreso().subscribe(data => {
      this.modalidad = data;
      console.log(this.modalidad);
    });
  }

  create(){
    console.log(this.mod);
    this.ingresoService.createIngresoModalidad(this.mod).subscribe(
      res=> {
      this.getModalida();
      this.route.navigate(['/datos-ingreso/modalidad']);
      Swal.fire('Nuevo cliente', `Modalidad creada con éxito`, 'success');
      }
    );
  }

  deleteModalidad(modalidad:Modalidad): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea dar de baja la modalidad ${modalidad.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, darla de baja',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.value){
        this.ingresoService.eliminarModalidad(modalidad).subscribe(
          res => {
            this.modalidad = this.modalidad.filter(b => b !== modalidad)
            Swal.fire('Modalidad Dada de Baja', `Modalidad ${modalidad.nombre} dada de baja con éxito`, 'success');
          }, error  => {
            Swal.fire('Error', `Modalidad ${modalidad.nombre} no dada de baja`, 'error');
          }
        )
      }
    })
  }

  update(): void{
    this.ingresoService.editarIngresoModalidad(this.mod).subscribe(data => {
      this.route.navigate(['/datos-ingreso/modalidad']);
      Swal.fire('Actualizado', 'Se ha actualizado correctamente', 'success');
    }, err => console.log(err)
      
    );
  }
}
