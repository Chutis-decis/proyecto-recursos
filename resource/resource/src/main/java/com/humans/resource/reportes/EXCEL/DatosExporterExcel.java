package com.humans.resource.reportes.EXCEL;

import com.humans.resource.entity.DatosPersonales.DatosPersonales;

import java.io.IOException;
import java.util.List;

import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
public class DatosExporterExcel {
    private XSSFWorkbook libro;
    private XSSFSheet hoja;

    private List<DatosPersonales> listaDatosPersonales;

    public DatosExporterExcel(List<DatosPersonales> listaDatosPersonales) {
        this.listaDatosPersonales = listaDatosPersonales;
        libro = new XSSFWorkbook();
        hoja = libro.createSheet("Datos Personales");
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
        celda.setCellValue("Nombres");
        celda.setCellStyle(estilo);

        celda = fila.createCell(2);
        celda.setCellValue("Primer Apellido");
        celda.setCellStyle(estilo);

        celda = fila.createCell(3);
        celda.setCellValue("Segundo Apellido");
        celda.setCellStyle(estilo);

        celda = fila.createCell(4);
        celda.setCellValue("Género");
        celda.setCellStyle(estilo);

        celda = fila.createCell(5);
        celda.setCellValue("CURP");
        celda.setCellStyle(estilo);

        celda = fila.createCell(6);
        celda.setCellValue("Estado");
        celda.setCellStyle(estilo);

        celda = fila.createCell(7);
        celda.setCellValue("Ciudad");
        celda.setCellStyle(estilo);

        celda = fila.createCell(8);
        celda.setCellValue("Colonia");
        celda.setCellStyle(estilo);

        celda = fila.createCell(9);
        celda.setCellValue("Calle");
        celda.setCellStyle(estilo);

        celda = fila.createCell(10);
        celda.setCellValue("Número Exterior");
        celda.setCellStyle(estilo);

        celda = fila.createCell(11);
        celda.setCellValue("Número Interior");
        celda.setCellStyle(estilo);

        celda = fila.createCell(12);
        celda.setCellValue("Extra");
        celda.setCellStyle(estilo);

        celda = fila.createCell(13);
        celda.setCellValue("Celular");
        celda.setCellStyle(estilo);

        celda = fila.createCell(14);
        celda.setCellValue("Teléfono");
        celda.setCellStyle(estilo);

        celda = fila.createCell(15);
        celda.setCellValue("Correo Personal");
        celda.setCellStyle(estilo);

        celda = fila.createCell(16);
        celda.setCellValue("Activo");
        celda.setCellStyle(estilo);

    }

    private void escribirDatosDeLaTable(){
        int numeroFila = 1;

        CellStyle estilo = libro.createCellStyle();
        XSSFFont fuente = libro.createFont();
        fuente.setFontHeight(14);
        estilo.setFont(fuente);

        for (DatosPersonales datosPersonales : listaDatosPersonales) {
            Row fila = hoja.createRow(numeroFila++);

            Cell celda = fila.createCell(0);
            celda.setCellValue(datosPersonales.getId());
            hoja.autoSizeColumn(0);
            celda.setCellStyle(estilo);

            celda = fila.createCell(1);
            celda.setCellValue(datosPersonales.getNombres());
            hoja.autoSizeColumn(1);
            celda.setCellStyle(estilo);

            celda = fila.createCell(2);
            celda.setCellValue(datosPersonales.getPrimerApellido());
            hoja.autoSizeColumn(2);
            celda.setCellStyle(estilo);

            celda = fila.createCell(3);
            celda.setCellValue(datosPersonales.getSegundoApellido());
            hoja.autoSizeColumn(3);
            celda.setCellStyle(estilo);

            celda = fila.createCell(4);
            celda.setCellValue(datosPersonales.getGenero());
            hoja.autoSizeColumn(4);
            celda.setCellStyle(estilo);

            celda = fila.createCell(5);
            celda.setCellValue(datosPersonales.getCurp());
            hoja.autoSizeColumn(5);
            celda.setCellStyle(estilo);

            celda = fila.createCell(6);
            celda.setCellValue(datosPersonales.getEstado());
            hoja.autoSizeColumn(6);
            celda.setCellStyle(estilo);

            celda = fila.createCell(7);
            celda.setCellValue(datosPersonales.getCiudad());
            hoja.autoSizeColumn(7);
            celda.setCellStyle(estilo);

            celda = fila.createCell(8);
            celda.setCellValue(datosPersonales.getColonia());
            hoja.autoSizeColumn(8);
            celda.setCellStyle(estilo);

            celda = fila.createCell(9);
            celda.setCellValue(datosPersonales.getCalle());
            hoja.autoSizeColumn(9);
            celda.setCellStyle(estilo);

            celda = fila.createCell(10);
            celda.setCellValue(datosPersonales.getNumeroExterior());
            hoja.autoSizeColumn(10);
            celda.setCellStyle(estilo);

            celda = fila.createCell(11);
            celda.setCellValue(datosPersonales.getNumeroInterior());
            hoja.autoSizeColumn(11);
            celda.setCellStyle(estilo);

            celda = fila.createCell(12);
            celda.setCellValue(datosPersonales.getExtra());
            hoja.autoSizeColumn(12);
            celda.setCellStyle(estilo);

            celda = fila.createCell(13);
            celda.setCellValue(datosPersonales.getCelular());
            hoja.autoSizeColumn(13);
            celda.setCellStyle(estilo);

            celda = fila.createCell(14);
            celda.setCellValue(datosPersonales.getTelefono());
            hoja.autoSizeColumn(14);
            celda.setCellStyle(estilo);

            celda = fila.createCell(15);
            celda.setCellValue(datosPersonales.getCorreoPersonal());
            hoja.autoSizeColumn(15);
            celda.setCellStyle(estilo);

            celda = fila.createCell(16);
            celda.setCellValue(datosPersonales.isActivo());
            hoja.autoSizeColumn(16);
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
