import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CPanel } from 'src/app/components/admin/CPanel';
import { DatosIngreso } from 'src/app/ingreso';
import { Modalidad } from 'src/app/modalidad';
import { Perfilamiento } from 'src/app/perfilamiento';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';
import { Tramite } from 'src/app/tramite';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-datos-ingreso',
  templateUrl: './registro-datos-ingreso.component.html',
  styleUrls: ['./registro-datos-ingreso.component.css']
})
export class RegistroDatosIngresoComponent implements OnInit {
  ingreso: DatosIngreso = new DatosIngreso();
  tramite: Tramite[];
  perfilamiento: Perfilamiento[];
  modalidad: Modalidad[];
  personales: CPanel = new CPanel();

  constructor(private ingresoService: IngresoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  obtenerTramite(): void{
    this.ingresoService.obtencionTramiteIngreso().subscribe(tramite => this.tramite = tramite);
  }

  obtenerPerfilamiento(): void{
    this.ingresoService.obtencionPerfilamientoIngreso().subscribe(perfilamiento => this.perfilamiento = perfilamiento);
  }

  obtenerModalidad(): void{
    this.ingresoService.obtencionModalidadIngreso().subscribe(modalidad => this.modalidad = modalidad);
  }

  ngOnInit(): void {
    this.cargar();
    this.obtenerTramite();
    this.obtenerPerfilamiento();
    this.obtenerModalidad();
  }

  cargar(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.ingresoService.getById(id).subscribe((ingreso) => this.ingreso = ingreso)
      }
    });
  }

  create(): void{
    console.log(this.ingreso);
    this.ingresoService.createIngreso(this.ingreso).subscribe(ingreso => { 
      this.router.navigate(['/login'])
      Swal.fire('Nuevo Dato de Ingreso', `${ingreso.tramite}`, 'success');
    }, 
    err => {
      console.error('Código del error desde el backend: ' + err.status);
    });
  }

  crear(): void{
    this.ingresoService.createIngreso(this.ingreso).subscribe(ingreso => { 
      this.router.navigate(['/datos/ingreso'])
      Swal.fire('Nuevo Dato de Ingreso', `${ingreso.tramite}`, 'success');
    });
  }

  update(): void{
    this.ingresoService.editarIngreso(this.ingreso).subscribe(resp => {
      this.router.navigate(['/datos-ingreso']);
      Swal.fire('Cliente Actualizado',`Los datos de ingreso de ${this.personales.nombres}`, 'success');
    }, 
    err => {
      console.error('Código del error desde el backend: ' + err.status);
    });
  }

  compararTramite(tra1: Tramite, tra2: Tramite): boolean{
    return tra1 == null || tra2 == null || tra1 == undefined || tra2 == undefined ? false: tra1.id === tra2.id;
  }

  compararPerfilamiento(per1: Perfilamiento, per2: Perfilamiento): boolean{
    if(per1 === undefined && per2 === undefined){
      return true;
    }
    return per1 === null || per2 === null || per1 === undefined || per2 === undefined ? false : per1.id === per2.id;
  }

  compararModalidad(mod1: Modalidad, mod2: Modalidad): boolean{
    if(mod1 === undefined && mod2 === undefined){
      return true;
    }
    return mod1 === null || mod2 === null || mod1 === undefined || mod2 === undefined ? false : mod1.id === mod2.id;
  }
}
