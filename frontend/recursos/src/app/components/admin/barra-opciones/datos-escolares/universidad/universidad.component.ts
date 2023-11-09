import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { universidad } from 'src/app/datos_escolares/universidad';
import { UniversidadService } from 'src/app/service/escolar/universidad.service';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.component.html',
  styleUrls: ['./universidad.component.css']
})
export class UniversidadComponent {
  /* Atributos */
  universidad: universidad [] = [];
  uni = new universidad();

  /* Constructor */
  constructor(private uniService: UniversidadService, private  route: Router) { }

  /* Inicializacion */
  ngOnInit(): void {
    this.getUniversidad();
  }

  /* Metodo para la obtencion de la universidad */
  getUniversidad(){
    this.uniService.getUniversidad().subscribe(data => {
      this.universidad = data;
      console.log(this.universidad);
    });
  }

  create():void{
    console.log(this.uni);
    this.uniService.createUniversidad(this.uni).subscribe(
      res=> this.getUniversidad()
    );
    this.route.navigate(['/datos-escolares/universidad'])
  }
}
