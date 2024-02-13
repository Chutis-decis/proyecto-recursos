import { Component, OnInit } from '@angular/core';
import { CPanel } from '../CPanel';
import { AlumnoService } from 'src/app/service/alumno/alumno.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatriculaService } from 'src/app/service/matricula/matricula.service';
import { error } from 'pdf-lib';
import { FtdService } from 'src/app/service/ftd/ftd.service';
import { DatosFTD } from 'src/app/FTD/ftd';
@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {

  /* Atributo */
  alumno: CPanel[];
  estudiante : CPanel = new CPanel();

  searchTerm: string = '';


  /* Constructor */
  constructor(private alumnoService: AlumnoService, private rout: Router, private activatedRouter: ActivatedRoute, private matriculaService: MatriculaService, private datosFTDService: FtdService) {this.rout = rout; }
  
  /* Metodos para el crud */
  ngOnInit(): void {
    this.getAlumnos();
    this.cargar();
  }

  /* Obtencion de los alumnos */
  private getAlumnos(){
    this.alumnoService.obtenerAlumnos().subscribe(data => {
      this.alumno = data;
    });
  }

  /* Eliminacion de los alumnos */
  deleteEstudiante(alumno: CPanel): void{
    Swal.fire({
      title: '¿Estas seguro?',
      text: `¿Seguro que desea dar de baja al alumno ${alumno.nombres} ${alumno.primerApellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, dalo de baja',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if(result.value){
        this.alumnoService.deleted(alumno).subscribe(
          response => {
            this.alumno = this.alumno.filter(alum => alum !== alumno)
            Swal.fire(
              'Alumno dado de baja',
              `Alumno ${alumno.nombres} dado de baja con exito.`,
              'success'
            )
          }, error => {
            Swal.fire(
              'Alumno no dado de baja',
              `Alumno ${alumno.nombres} no dado de baja con exito.`,
              'error'
            )
          }
        )
      }else{
        Swal.fire(
          'Alumno no dado de baja',
          `Alumno ${alumno.nombres} no dado de baja con exito.`,
          'error'
        )
      }
    })
  }


  /* Editar */

  cargar(){
    this.activatedRouter.params.subscribe(e => {
      let id = e['id'];
      if(id){
        this.alumnoService.getById(id).subscribe(data => this.estudiante=data);
      }
    });
  }
  /* *******************************************************************************************************++ */
  
  
  /* Metodo para mostrar datos completos */
  getAlumno(): void{
    this.getAlumnos();
    this.rout.navigate(['/detalles']);
  }


  /* Registrar datos FTD */
  registrarDatosFTD(): void{
    this.rout.navigate(['/registro-datos-ftd']);
  }

  datosFTD: DatosFTD = new DatosFTD();
  update():void{
    this.datosFTDService.editarDatosFTD(this.datosFTD).subscribe(
      e=> {
        this.rout.navigate(['/datos-ftd'])
        Swal.fire('Datos FTD actualizados', `Datos ${this.datosFTD.nombreProyecto} actualizado con exito!`, 'success')
      }
    );
  }

  actualizarIdControl() {
    this.matriculaService.idControlAlumno = this.estudiante.id.toString();
  }


  /* Generacion de PDF */
  generarPDF() {
    this.alumnoService.generarPDF().subscribe(
      (data: Blob) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      error => {
        console.error('Error al generar el PDF', error);
      }
    );
  }

  /* Generacion del archivo Excel */
  generarExcel() {
    this.alumnoService.generarExcel().subscribe(
      (data: Blob) => {
        const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'  });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      error => {
        console.error('Error al generar el Excel', error);
      }
    );
  }
}
