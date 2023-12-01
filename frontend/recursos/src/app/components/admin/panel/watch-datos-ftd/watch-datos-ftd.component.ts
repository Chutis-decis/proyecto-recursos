import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosFTD } from 'src/app/FTD/ftd';
import { FtdService } from 'src/app/service/ftd/ftd.service';

@Component({
  selector: 'app-watch-datos-ftd',
  templateUrl: './watch-datos-ftd.component.html',
  styleUrls: ['./watch-datos-ftd.component.css']
})
export class WatchDatosFtdComponent {
  datosFTD: DatosFTD [] = [];
  ftd = new DatosFTD ();

  constructor(private router: Router, private FtdService: FtdService) { }


  ngOnInit(): void {
    this.getDatosFTD();
  }

  getDatosFTD() {
    this.FtdService.obtenerFTD().subscribe(data => {
      this.datosFTD = data;
    });
  }

  regresar() {
    this.router.navigate(['/datos-ftd']);
  }
} 
