import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-barra-alumno',
  templateUrl: './barra-alumno.component.html',
  styleUrls: ['./barra-alumno.component.css']
})
export class BarraAlumnoComponent implements AfterViewInit {
  @ViewChild('signaturePad', { static: true }) signaturePadElement: ElementRef<HTMLCanvasElement>;

  private signaturePad: SignaturePad;

  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement, {
      // Opciones de configuración si es necesario
    });
  }
  constructor  (private route: Router) { }
  clearSignature() {
    // Limpiar la firma
    this.signaturePad.clear();
  }

  saveSignature() {
    // Obtener la imagen de la firma en formato base64
    const signatureImage = this.signaturePad.toDataURL();
    console.log(signatureImage);

    // Aquí puedes realizar acciones adicionales, como enviar la imagen a un servidor, etc.
    const doc = new jsPDF();
    
    doc.addImage(signatureImage, 'PNG', 70, 10, 100, 70);

    doc.save('firma.pdf');
  }
}
