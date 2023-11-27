import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modalidad } from 'src/app/modalidad';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-modalidad',
  templateUrl: './modalidad.component.html',
  styleUrls: ['./modalidad.component.css']
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
      this.route.navigate(['/datos-ingreso/modalidad']);
      Swal.fire('Nuevo cliente', `Cliente creado con éxito`, 'success');
      }
    );
  }

  deleteModalidad(modalidad: Modalidad){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Estas Seguro?",
      text: `¿Seguro que desea eliminar la modalidad ${modalidad.nombre}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.ingresoService.eliminarModalidad(modalidad).subscribe(
          response => {
            this.modalidad = this.modalidad.filter(cli => cli !== modalidad)
            swalWithBootstrapButtons.fire({
              title: "Modalidad Eliminada",
              text: `Modalidad ${modalidad.nombre} eliminado con éxito!`,
              icon: "success"
            });
          }
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelado",
          text: "Cancelado parra el guardado de los datos de la modalidad:)",
          icon: "error"
        });
      }
    });
  }

  update(): void{
    this.ingresoService.editarIngresoModalidad(this.mod).subscribe(data => {
      this.route.navigate(['/datos-ingreso/modalidad']);
      Swal.fire('Actualizado', 'Se ha actualizado correctamente', 'success');
    }, err => console.log(err)
      
    );
  }
}
