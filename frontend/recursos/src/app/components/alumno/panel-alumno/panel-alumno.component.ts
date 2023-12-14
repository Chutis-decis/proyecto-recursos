import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-panel-alumno',
  templateUrl: './panel-alumno.component.html',
  styleUrls: ['./panel-alumno.component.css']
})
export class PanelAlumnoComponent implements AfterViewInit{
  @ViewChild('signaturePad', { static: true }) signaturePadElement: ElementRef<HTMLCanvasElement>;

  private signaturePad: SignaturePad;

  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement, {
      // Opciones de configuración si es necesario
    });
  }

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
    
    doc.addImage(signatureImage, 'PNG', 50, 10, 100, 50);

    doc.save('firma.pdf');
  }

}
