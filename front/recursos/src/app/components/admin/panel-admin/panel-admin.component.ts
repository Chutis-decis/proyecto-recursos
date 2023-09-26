import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent {
  constructor(private router: Router){}

  inicio(){
    this.router.navigate(['/admin']);
  }
  login(){
    this.router.navigate(['/login']);
  }
}
