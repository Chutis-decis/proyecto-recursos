package com.humans.resource.reportes.DatosIngreso;

import com.humans.resource.entity.DatosEscolares.DatosEscolares;
import com.humans.resource.entity.DatosIngreso.DatosIngreso;
import jakarta.servlet.ServletOutputStream;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.IOException;
import java.util.List;

public class IngresoExcel {
    private XSSFWorkbook libro;
    private XSSFSheet hoja;

    private List<DatosIngreso> listaDatosPersonales;

    public IngresoExcel(List<DatosIngreso> listaDatosPersonales) {
        this.listaDatosPersonales = listaDatosPersonales;
        libro = new XSSFWorkbook();
        hoja = libro.createSheet("Datos Ingreso");
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
        celda.setCellValue("Tramite");
        celda.setCellStyle(estilo);

        celda = fila.createCell(2);
        celda.setCellValue("Perfilamiento");
        celda.setCellStyle(estilo);

        celda = fila.createCell(3);
        celda.setCellValue("Turno");
        celda.setCellStyle(estilo);

        celda = fila.createCell(4);
        celda.setCellValue("Horario");
        celda.setCellStyle(estilo);

        celda = fila.createCell(5);
        celda.setCellValue("Modalidad");
        celda.setCellStyle(estilo);

        celda = fila.createCell(6);
        celda.setCellValue("CV");
        celda.setCellStyle(estilo);

        celda = fila.createCell(7);
        celda.setCellValue("Historial Academico");
        celda.setCellStyle(estilo);
    }

    private void escribirDatosDeLaTable(){
        int numeroFila = 1;

        CellStyle estilo = libro.createCellStyle();
        XSSFFont fuente = libro.createFont();
        fuente.setFontHeight(14);
        estilo.setFont(fuente);

        for (DatosIngreso datosPersonales : listaDatosPersonales) {
            Row fila = hoja.createRow(numeroFila++);

            Cell celda = fila.createCell(0);
            celda.setCellValue(datosPersonales.getId());
            hoja.autoSizeColumn(0);
            celda.setCellStyle(estilo);

            celda = fila.createCell(1);
            celda.setCellValue(String.valueOf(datosPersonales.getTramite()));
            hoja.autoSizeColumn(1);
            celda.setCellStyle(estilo);

            celda = fila.createCell(2);
            celda.setCellValue(String.valueOf(datosPersonales.getPerfilamiento()));
            hoja.autoSizeColumn(2);
            celda.setCellStyle(estilo);

            celda = fila.createCell(3);
            celda.setCellValue(datosPersonales.getTurno());
            hoja.autoSizeColumn(3);
            celda.setCellStyle(estilo);

            celda = fila.createCell(4);
            celda.setCellValue(datosPersonales.getHorario());
            hoja.autoSizeColumn(4);
            celda.setCellStyle(estilo);

            celda = fila.createCell(5);
            celda.setCellValue(String.valueOf(datosPersonales.getModalidad()));
            hoja.autoSizeColumn(5);
            celda.setCellStyle(estilo);

            celda = fila.createCell(6);
            celda.setCellValue(datosPersonales.getCv());
            hoja.autoSizeColumn(6);
            celda.setCellStyle(estilo);

            celda = fila.createCell(7);
            celda.setCellValue(datosPersonales.getHistorialAcademico());
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
