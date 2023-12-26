import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';
import jsPDF from 'jspdf';

import { PDFDocument, rgb } from 'pdf-lib';

@Component({
  selector: 'app-panel-alumno',
  templateUrl: './panel-alumno.component.html',
  styleUrls: ['./panel-alumno.component.css'],
})
export class PanelAlumnoComponent implements AfterViewInit {
  @ViewChild('signaturePad', { static: true })
  signaturePadElement: ElementRef<HTMLCanvasElement>;

  private signaturePad: SignaturePad;

  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(
      this.signaturePadElement.nativeElement,
      {
        // Opciones de configuración si es necesario
      }
    );
  }

  clearSignature() {
    // Limpiar la firma
    this.signaturePad.clear();
  }

  async saveSignature() {
    // Obtener la imagen de la firma en formato base64
    const signatureImage = this.signaturePad.toDataURL();

    // Crear un nuevo documento PDF con jsPDF y agregar la firma
    const doc = new jsPDF();
    doc.addImage(signatureImage, 'PNG', 50, 10, 100, 50);
    doc.save('firma.pdf');

    // Leer el documento PDF existente
    const existingPdfBytes = await fetch('../../../archivos-mensuales/Formato-Reporte-de-actividades-2023-Residencias - AGOSTO.pdf').then(
      (res) => res.arrayBuffer()
    );

    // Crear una instancia de PDFDocument
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Crear una imagen a partir de la firma
    const signatureImageBytes = atob(signatureImage.split(',')[1]);
    const signatureImageUint8Array = new Uint8Array(signatureImageBytes.length);
    for (let i = 0; i < signatureImageBytes.length; i++) {
      signatureImageUint8Array[i] = signatureImageBytes.charCodeAt(i);
    }

    const signatureImagePdf = await pdfDoc.embedPng(signatureImageUint8Array);

    // Agregar la firma a la primera página del documento PDF existente
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    firstPage.drawImage(signatureImagePdf, {
      x: firstPage.getWidth() / 2 - 100,
      y: firstPage.getHeight() / 2 - 50,
      width: 200,
      height: 100,
    });

    // Guardar el documento PDF
    const pdfBytes = await pdfDoc.save();
    this.download(pdfBytes, '../../../archivos-mensuales/Formato-Reporte-de-actividades-2023-Residencias - AGOSTO.pdf', 'application/pdf');
  }

  download(data: BlobPart, filename: string, type: string) {
    var file = new Blob([data], { type: type });
    if ((window.navigator as any).msSaveOrOpenBlob)
      // IE10+
      (window.navigator as any).msSaveOrOpenBlob(file, filename);
    else {
      // Others
      var a = document.createElement('a'),
        url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }
  }
}
