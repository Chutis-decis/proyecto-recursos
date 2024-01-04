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
    const firmaDataUrl = this.signaturePad.toDataURL("image/svg+xml");

    // Crear un nuevo documento PDF
    const pdf = new jsPDF();
    pdf.text('', 10, 10);
    pdf.addImage(firmaDataUrl, 'PNG', 10, 20, 100, 50); // Ajusta el tamaño y la posición según tus necesidades

    // Guardar el PDF o mostrar en una nueva ventana
    pdf.save('documento_con_firma.pdf');
  }

  // Documentos Mensuales



}
