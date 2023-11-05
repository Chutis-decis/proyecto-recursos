import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ftd } from 'src/app/ftd';
import { FtdService } from 'src/app/service/ftd/ftd.service';

@Component({
  selector: 'app-ftd-baja',
  templateUrl: './ftd-baja.component.html',
  styleUrls: ['./ftd-baja.component.css']
})
export class FtdBajaComponent {
  ftddata: ftd [] = [];
  ftd = new ftd();

    constructor(private serviceFTD: FtdService, private router: Router) { }
  
    ngOnInit(): void {
      this.getDatosFTD();
    }

    getDatosFTD() {
      this.serviceFTD.obtenerFTD().subscribe(data => {
        this.ftddata = data;
      });
    }

    getFtd(): void{
      if(this.ftd.activo == false){
        this.getDatosFTD();
      }
      this.router.navigate(['/detalles-ftd']);
    }
}
