import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingreso } from 'src/app/ingreso';
import { Modalidad } from 'src/app/modalidad';
import { Perfilamiento } from 'src/app/perfilamiento';
import { IngresoService } from 'src/app/service/ingreso/ingreso.service';
import { Tramite } from 'src/app/tramite';

@Component({
  selector: 'app-registro-datos-ingreso',
  templateUrl: './registro-datos-ingreso.component.html',
  styleUrls: ['./registro-datos-ingreso.component.css']
})
export class RegistroDatosIngresoComponent implements OnInit {
  /* Atributos y Objetos */
  ingreso: Ingreso = new Ingreso();
  ingresados: Ingreso[];
  mod: Modalidad = new Modalidad();
  modalidad: Modalidad [] = [];
  tramite: Tramite [] = [];
  tra: Tramite = new Tramite();
  perfilamiento: Perfilamiento [] = [];
  per: Perfilamiento = new Perfilamiento();
  /* Constructor */
  constructor(private ingresoService: IngresoService, private route: Router, private activateRouter: ActivatedRoute) { }

  /* Obetener */
  getAll():void{
    this.ingresoService.obtenerIngreso().subscribe(
      e=> this.ingresados = e
    );
  }
  
  /* obtener Perfilamiento */
  getPerfilamiento(): void{
    this.ingresoService.obtencionPerfilamientoIngreso().subscribe(perfil => 
      this.perfilamiento = perfil);
  }
  
  /* Obtener Tramite */
  getTramite(): void{
    this.ingresoService.obtencionTramiteIngreso().subscribe(tramite => 
      this.tramite = tramite)
  }

  /* Obtener Modalidad Ingreso */
  getModalidad(): void{
    this.ingresoService.obtencionModalidadIngreso().subscribe(mod =>
      this.modalidad = mod)
  }

  /* Crear */
  create():void{
  console.log(this.ingreso);
    this.ingresoService.createIngreso(this.ingreso).subscribe(
      res=> this.getAll()
    );
    this.route.navigate(['/home'])
  }

  
    
    /* Guuardado de todas las tablas */
    guardado():void{
      this.ingresoService.createIngreso(this.ingreso).subscribe(res =>{
        console.log(`Datos guardados con exito ${res}`)
      }, err => console.log(`Error al guardar los datos ${err}`));
      this.ingresoService.createIngresoModalidad(this.mod).subscribe(res =>
        {console.log(`Datos guardados con exito ${res}`)},
      err => console.log(`Error al guardar los datos ${err}`)
      );
      this.ingresoService.createIngresoPerfilamiento(this.per).subscribe(res =>
        {console.log(`Datos guardados con exito ${res}`)},
      err => console.log(`Error al guardar los datos ${err}`)
      );
      this.ingresoService.createIngresoTramite(this.tra).subscribe(res =>
        {console.log(`Datos guardados con exito ${res}`)},
      err => console.log(`Error al guardar los datos ${err}`)
      );
      
    }

    obtenerAll(){
      this.getAll();
      this.getModalidad();
      this.getPerfilamiento();
      this.getTramite();
    }

  ngOnInit(): void {
    this.cargar();
    this.obtenerAll();
  }


  /* Nos servira para mostrar los datos registrados */
  cargar(){
    this.activateRouter.params.subscribe(e => {
      let id = e['id'];
      if(id){
        this.ingresoService.getById(id).subscribe(data => this.ingreso=data);
      }
      
    });
  }

  /* Modificacion de los datos de inngreso */
  update():void{
    this.ingresoService.editarIngreso(this.ingreso.id, this.ingreso).subscribe(
      e=> this.route.navigate(['/datos-ingreso'])
    );
  }

  compararModalidad(modalida1: Modalidad, modalidad2: Modalidad): boolean{
    if(modalida1 === undefined && modalidad2 === undefined){
      return true;
    }
    return modalida1 === null || modalidad2 === null || modalida1 === undefined || modalidad2 === undefined ? false : modalida1.id === modalidad2.id;
  }

  compararTramite(tramite1: Tramite, tramite2: Tramite): boolean{
    if(tramite1 === undefined && tramite2 === undefined){
      return true;
    }
    return tramite1 === null || tramite2 === null || tramite1 === undefined || tramite2 === undefined ? false : tramite1.id === tramite2.id;
  }

  compararPerfilamiento(perfilamiento1: Perfilamiento, perfilamiento2: Perfilamiento): boolean{
    if(perfilamiento1 === undefined && perfilamiento2 === undefined){
      return true;
    }
    return perfilamiento1 === null || perfilamiento2 === null || perfilamiento1 === undefined || perfilamiento2 === undefined ? false : perfilamiento1.id === perfilamiento2.id;
  }
}
