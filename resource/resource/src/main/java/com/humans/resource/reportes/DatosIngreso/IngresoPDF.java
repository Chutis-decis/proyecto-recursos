package com.humans.resource.reportes.DatosIngreso;

import com.humans.resource.entity.DatosEscolares.DatosEscolares;
import com.humans.resource.entity.DatosIngreso.DatosIngreso;
import com.lowagie.text.*;
import com.lowagie.text.Font;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;

import java.awt.*;
import java.io.IOException;
import java.util.List;

public class IngresoPDF {
    private List<DatosIngreso> listaDatosIngreso;

    public IngresoPDF(List<DatosIngreso> listaDatosIngreso) {
        this.listaDatosIngreso = listaDatosIngreso;
    }

    private void escribirCabeceraTable(PdfPTable tabla){
        PdfPCell celda = new PdfPCell();
        celda.setBackgroundColor(Color.BLUE);
        celda.setPadding(5);

        com.lowagie.text.Font fuente = FontFactory.getFont(FontFactory.HELVETICA);
        fuente.setColor(Color.WHITE);

        celda.setPhrase(new Phrase("ID",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Tramite",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Perfilamiento",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Turno",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Horario",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Modalidad",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("CV",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Historial Academico",fuente));
        tabla.addCell(celda);
    }

    private void escribirDatosofTabla(PdfPTable tabla) {
        for (DatosIngreso datosEscolares : listaDatosIngreso) {
            tabla.addCell(datosEscolares.getId().toString());
            tabla.addCell(String.valueOf(datosEscolares.getTramite()));
            tabla.addCell(String.valueOf(datosEscolares.getPerfilamiento()));
            tabla.addCell(String.valueOf(datosEscolares.getTurno()));
            tabla.addCell(datosEscolares.getHorario());
            tabla.addCell(String.valueOf(datosEscolares.getModalidad()));
            tabla.addCell(String.valueOf(datosEscolares.getCv()));
            tabla.addCell(String.valueOf(datosEscolares.getHistorialAcademico()));
        }
    }

    public void exportar(jakarta.servlet.http.HttpServletResponse response) throws IOException, DocumentException {
        Document document = new Document(PageSize.A4);
        PdfWriter.getInstance(document,response.getOutputStream());

        document.open();

        Font fuente = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        fuente.setColor(Color.BLUE);
        fuente.setSize(18);


        Paragraph titulo = new Paragraph("Reporte de Datos de Ingreso",fuente);
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
