package com.humans.resource.reportes;

import com.humans.resource.entity.DatosPersonales.DatosPersonales;

import java.awt.Color;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Font;
import com.lowagie.text.FontFactory;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.Phrase;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;;
import java.io.IOException;

import javax.servlet.http.HttpServletResponse;
public class DatosExporterPDF {
    private List<DatosPersonales> listaDatosPersonales;

    public DatosExporterPDF(List<DatosPersonales> listaDatosPersonales) {
        this.listaDatosPersonales = listaDatosPersonales;
    }

    private void escribirCabeceraTable(PdfPTable tabla){
        PdfPCell celda = new PdfPCell();
        celda.setBackgroundColor(Color.BLUE);
        celda.setPadding(5);

        Font fuente = FontFactory.getFont(FontFactory.HELVETICA);
        fuente.setColor(Color.WHITE);

        celda.setPhrase(new Phrase("ID",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Nombres",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Primer Apellido",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Segundo Apellido",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Género",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("CURP",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Estado",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Ciudad",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Colonia",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Calle",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Número Exterior",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Número Interior",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Extra",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Celular",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Teléfono",fuente));
        tabla.addCell(celda);

        celda.setPhrase(new Phrase("Correo Personal",fuente));
        tabla.addCell(celda);
    }

    private void escribirDatosofTabla(PdfPTable tabla) {
        for (DatosPersonales datosPersonales : listaDatosPersonales) {
            tabla.addCell(datosPersonales.getId().toString());
            tabla.addCell(datosPersonales.getNombres());
            tabla.addCell(datosPersonales.getPrimerApellido());
            tabla.addCell(datosPersonales.getSegundoApellido());
            tabla.addCell(datosPersonales.getGenero());
            tabla.addCell(datosPersonales.getCurp());
            tabla.addCell(datosPersonales.getEstado());
            tabla.addCell(datosPersonales.getCiudad());
            tabla.addCell(datosPersonales.getColonia());
            tabla.addCell(datosPersonales.getCalle());
            tabla.addCell(datosPersonales.getNumeroExterior());
            tabla.addCell(datosPersonales.getNumeroInterior());
            tabla.addCell(datosPersonales.getExtra());
            tabla.addCell(datosPersonales.getCelular());
            tabla.addCell(datosPersonales.getTelefono());
            tabla.addCell(datosPersonales.getCorreoPersonal());
        }
    }

    public void exportar(jakarta.servlet.http.HttpServletResponse response) throws IOException, DocumentException {
        Document document = new Document(PageSize.A0);
        PdfWriter.getInstance(document,response.getOutputStream());

        document.open();

        Font fuente = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        fuente.setColor(Color.BLUE);
        fuente.setSize(18);


        Paragraph titulo = new Paragraph("Reporte de Datos Personales",fuente);
        titulo.setAlignment(Paragraph.ALIGN_CENTER);
        document.add(titulo);
        PdfPTable tabla = new PdfPTable(16);
        tabla.setWidthPercentage(100);
        tabla.setSpacingBefore(15);
        tabla.setWidths(new float[]{1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1});
        tabla.setWidthPercentage(110);

        escribirCabeceraTable(tabla);
        escribirDatosofTabla(tabla);

        document.add(tabla);
        document.close();
    }
}
