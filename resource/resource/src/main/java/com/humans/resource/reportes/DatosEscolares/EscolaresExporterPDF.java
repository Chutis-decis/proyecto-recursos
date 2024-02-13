package com.humans.resource.reportes.DatosEscolares;

import com.humans.resource.entity.DatosEscolares.DatosEscolares;
import com.humans.resource.entity.DatosPersonales.DatosPersonales;
import com.lowagie.text.*;
import com.lowagie.text.Font;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;

import java.awt.*;
import java.io.IOException;
import java.util.List;

public class EscolaresExporterPDF {
    private List<DatosEscolares> listaDatosEscolares;

    public EscolaresExporterPDF(List<DatosEscolares> listaDatosEscolares) {
        this.listaDatosEscolares = listaDatosEscolares;
    }

    private void escribirCabeceraTable(PdfPTable tabla){
        PdfPCell celda = new PdfPCell();
        celda.setBackgroundColor(Color.BLUE);
        celda.setPadding(5);

        com.lowagie.text.Font fuente = FontFactory.getFont(FontFactory.HELVETICA);
        fuente.setColor(Color.WHITE);

        celda.setPhrase(new Phrase("ID",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Correo Escolar",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Carrera",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Universidad",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Matricula Escolar",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Periodo",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Modalidad Escolar",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Plan Educativo",fuente));
        tabla.addCell(celda);
    }

    private void escribirDatosofTabla(PdfPTable tabla) {
        for (DatosEscolares datosEscolares : listaDatosEscolares) {
            tabla.addCell(datosEscolares.getId().toString());
            tabla.addCell(datosEscolares.getCorreoEscolar());
            tabla.addCell(datosEscolares.getCarrera());
            tabla.addCell(String.valueOf(datosEscolares.getUniversidad()));
            tabla.addCell(datosEscolares.getMatriculaEscolar());
            tabla.addCell(String.valueOf(datosEscolares.getPeriodo()));
            tabla.addCell(String.valueOf(datosEscolares.getModalidadEscolar()));
            tabla.addCell(String.valueOf(datosEscolares.getPlanesEducativos()));
        }
    }

    public void exportar(jakarta.servlet.http.HttpServletResponse response) throws IOException, DocumentException {
        Document document = new Document(PageSize.A4);
        PdfWriter.getInstance(document,response.getOutputStream());

        document.open();

        Font fuente = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        fuente.setColor(Color.BLUE);
        fuente.setSize(18);


        Paragraph titulo = new Paragraph("Reporte de Datos Personales",fuente);
        titulo.setAlignment(Paragraph.ALIGN_CENTER);
        document.add(titulo);
        PdfPTable tabla = new PdfPTable(8);
        tabla.setWidthPercentage(100);
        tabla.setSpacingBefore(15);
        tabla.setWidths(new float[]{1,1,1,1,1,1,1,1});
        tabla.setWidthPercentage(110);

        escribirCabeceraTable(tabla);
        escribirDatosofTabla(tabla);

        document.add(tabla);
        document.close();
    }
}
