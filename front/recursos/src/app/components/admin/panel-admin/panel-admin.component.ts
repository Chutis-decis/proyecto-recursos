import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from 'src/app/model';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent {
  listAlumn: Model[] = [];
  
  
  constructor(private router: Router, private modalService: ServicesService){}
  

  ngInit(){
    this.list();
  }

  list(){
    this.modalService.getModel().subscribe(resp => {
      if(resp){
        this.listAlumn = resp;
      }
    });
  }

  inicio(){
    this.router.navigate(['/admin']);
  }
  login(){
    this.router.navigate(['/login']);
  }
  repor (){
    this.router.navigate(['/admin/reportes']);
  }
}
