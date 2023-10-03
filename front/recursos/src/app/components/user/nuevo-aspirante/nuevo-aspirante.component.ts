import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from 'src/app/model/model';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-nuevo-aspirante',
  templateUrl: './nuevo-aspirante.component.html',
  styleUrls: ['./nuevo-aspirante.component.css']
})
export class NuevoAspiranteComponent {
  constructor(private route:Router, private servicesService: ServicesService) { this.route = route; }
  listAlumn: Model[] = [];

  aspirante(){
    this.route.navigate(['/alumno']);
  }
  ayuda(){
    this.route.navigate(['/ayuda']);
  }
  ngInit(){
    this.list();
  }

  list(){
    this.servicesService.getModel().subscribe(resp => {
      if(resp){
        this.listAlumn = resp;
      }
    });
  }
}
