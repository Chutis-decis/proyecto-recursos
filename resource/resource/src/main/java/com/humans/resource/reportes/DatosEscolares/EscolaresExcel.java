package com.humans.resource.reportes.DatosEscolares;

import com.humans.resource.entity.DatosEscolares.DatosEscolares;
import com.humans.resource.entity.DatosPersonales.DatosPersonales;
import jakarta.servlet.ServletOutputStream;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.RichTextString;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.IOException;
import java.util.List;

public class EscolaresExcel {
    private XSSFWorkbook libro;
    private XSSFSheet hoja;

    private List<DatosEscolares> listaDatosPersonales;

    public EscolaresExcel(List<DatosEscolares> listaDatosPersonales) {
        this.listaDatosPersonales = listaDatosPersonales;
        libro = new XSSFWorkbook();
        hoja = libro.createSheet("Datos Escolares");
    }

    private void escribirCabeceraTabla() {
        Row fila = hoja.createRow(0);

        CellStyle estilo = libro.createCellStyle();
        XSSFFont fuente = libro.createFont();
        fuente.setBold(true);
        fuente.setFontHeight(16);
        estilo.setFont(fuente);

        Cell celda = fila.createCell(0);
        celda.setCellValue("ID");
        celda.setCellStyle(estilo);

        celda = fila.createCell(1);
        celda.setCellValue("Correo Escolar");
        celda.setCellStyle(estilo);

        celda = fila.createCell(2);
        celda.setCellValue("Carrera");
        celda.setCellStyle(estilo);

        celda = fila.createCell(3);
        celda.setCellValue("Universidad");
        celda.setCellStyle(estilo);

        celda = fila.createCell(4);
        celda.setCellValue("Matricula Escolar");
        celda.setCellStyle(estilo);

        celda = fila.createCell(5);
        celda.setCellValue("Periodo");
        celda.setCellStyle(estilo);

        celda = fila.createCell(6);
        celda.setCellValue("Matricula Escolar");
        celda.setCellStyle(estilo);

        celda = fila.createCell(7);
        celda.setCellValue("Plan Educativo");
        celda.setCellStyle(estilo);
    }

    private void escribirDatosDeLaTable(){
        int numeroFila = 1;

        CellStyle estilo = libro.createCellStyle();
        XSSFFont fuente = libro.createFont();
        fuente.setFontHeight(14);
        estilo.setFont(fuente);

        for (DatosEscolares datosPersonales : listaDatosPersonales) {
            Row fila = hoja.createRow(numeroFila++);

            Cell celda = fila.createCell(0);
            celda.setCellValue(datosPersonales.getId());
            hoja.autoSizeColumn(0);
            celda.setCellStyle(estilo);

            celda = fila.createCell(1);
            celda.setCellValue(datosPersonales.getCorreoEscolar());
            hoja.autoSizeColumn(1);
            celda.setCellStyle(estilo);

            celda = fila.createCell(2);
            celda.setCellValue(datosPersonales.getCarrera());
            hoja.autoSizeColumn(2);
            celda.setCellStyle(estilo);

            celda = fila.createCell(3);
            celda.setCellValue(String.valueOf(datosPersonales.getUniversidad()));
            hoja.autoSizeColumn(3);
            celda.setCellStyle(estilo);

            celda = fila.createCell(4);
            celda.setCellValue(datosPersonales.getMatriculaEscolar());
            hoja.autoSizeColumn(4);
            celda.setCellStyle(estilo);

            celda = fila.createCell(5);
            celda.setCellValue(String.valueOf(datosPersonales.getPeriodo()));
            hoja.autoSizeColumn(5);
            celda.setCellStyle(estilo);

            celda = fila.createCell(6);
            celda.setCellValue(String.valueOf(datosPersonales.getModalidadEscolar()));
            hoja.autoSizeColumn(6);
            celda.setCellStyle(estilo);

            celda = fila.createCell(7);
            celda.setCellValue(String.valueOf(datosPersonales.getPlanesEducativos()));
            hoja.autoSizeColumn(7);
            celda.setCellStyle(estilo);
        }
    }



    public void exportar(jakarta.servlet.http.HttpServletResponse response) throws IOException {
        escribirCabeceraTabla();
        escribirDatosDeLaTable();

        response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        response.setHeader("Content-Disposition", "attachment; filename=nombre_del_archivo.xlsx");

        try (ServletOutputStream outPutStream = response.getOutputStream()) {
            libro.write(outPutStream);
            libro.close();
        }
    }
}
