import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modalidad } from 'src/app/modalidad';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';

@Component({
  selector: 'app-modalidad',
  templateUrl: './modalidad.component.html',
  styleUrls: ['./modalidad.component.css']
})
export class ModalidadComponent {
  /* Atributos */
  modalidad: Modalidad [] = [];
  mod: Modalidad = new Modalidad();
  editModalidad: Modalidad = {id: 0, nombre: ''}

  /* Constructor */
  constructor(private ingresoService: IngresoService, private route: Router, private activateRoute: ActivatedRoute){}
  
  ngOnInit(): void {
    this.getModalida();
    this.cargar();
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
      res=> this.getModalida()
    );
    this.route.navigate(['/datos-ingreso/modalidad'])
  }

  guardar(){
    this.ingresoService.createIngresoModalidad(this.mod).subscribe(data => {
      console.log(data)
    })
  }

  deleteModalidad(id: number){
    this.ingresoService.eliminarModalidad(id).subscribe(data => {
      console.log("Alumno eliminado", data);
      this.getModalida();
    });
  }

  onSubmit(){
    this.guardar()
    
    this.route.navigate(['/datos-ingreso/modalidad']);
  }

  cargar(): void{
    this.activateRoute.params.subscribe(e => {
      let id = e['id'];
      if(id){
        this.ingresoService.getByIdModalidad(id).subscribe(data => this.mod=data);
        this.route.navigate(['/datos-ingreso/modalidad'])
      }
    });
  }
}
