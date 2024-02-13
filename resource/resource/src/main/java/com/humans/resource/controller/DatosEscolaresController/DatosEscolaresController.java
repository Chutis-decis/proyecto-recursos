package com.humans.resource.controller.DatosEscolaresController;

import com.humans.resource.entity.DatosEscolares.DatosEscolares;
import com.humans.resource.entity.DatosPersonales.DatosPersonales;
import com.humans.resource.reportes.DatosEscolares.EscolaresExcel;
import com.humans.resource.reportes.DatosEscolares.EscolaresExporterPDF;
import com.humans.resource.reportes.DatosExporterPDF;
import com.humans.resource.repository.DatosEscolaresRepository.DatosEscolaresService;
import com.lowagie.text.DocumentException;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/datos-escolares")
@CrossOrigin (origins = "http://localhost:4200")
public class DatosEscolaresController {

    private final DatosEscolaresService datosEscolaresService;

    @Autowired
    public DatosEscolaresController(DatosEscolaresService datosEscolaresService) {
        this.datosEscolaresService = datosEscolaresService;
    }

    @PostMapping
    public DatosEscolares crearDatosEscolares(@RequestBody DatosEscolares datosEscolares) {
        return datosEscolaresService.createDatosEscolares(datosEscolares);
    }

    @PutMapping("/{id}")
    public DatosEscolares actualizarDatosEscolares(@PathVariable Long id, @RequestBody DatosEscolares datosEscolares) {
        return datosEscolaresService.updateDatosEscolares(id, datosEscolares);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> obtenerDatosEscolaresPorId(@PathVariable Long id) {
        DatosEscolares datosEscolares = null;
        Map<String, Object> response = new HashMap<>();

        try{
            datosEscolares = datosEscolaresService.getDatosEscolaresById(id);
        }catch (DataAccessException e){
            response.put("mensaje", "Error al realizar la consulta a la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if(datosEscolares == null){
            response.put("mensaje", "el cliente ID ".concat(id.toString().concat(" no existe en la base de datos")));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<DatosEscolares>(datosEscolares, HttpStatus.OK);
    }

    @GetMapping
    public List<DatosEscolares> listarDatosEscolares() {
        return datosEscolaresService.getAllDatosEscolares();
    }


    @GetMapping("/todos")
    public ResponseEntity<List<DatosEscolares>> obtenerTodosLosDatos() {
        List<DatosEscolares> datos = datosEscolaresService.getAllDatosEscolares();
        return ResponseEntity.ok(datos);
    }

    @DeleteMapping("/{id}")
    public void eliminarDatosEscolares(@PathVariable Long id) {
        datosEscolaresService.deleteDatosEscolares(id);
    }

    @DeleteMapping("/recuperacion/{id}")
    public void activatedDatosEscolares(@PathVariable Long id){
        datosEscolaresService.activatedDatosEscolares(id);
    }

    @DeleteMapping("/eliminar/{id}")
    public void eliminarDatosEscolaresDefinitivamente(@PathVariable Long id){
        datosEscolaresService.eliminarDatosEscolares(id);
    }

    @GetMapping("/exportar/pdf")
    public void exportarPDF(HttpServletResponse response) throws IOException, DocumentException {
        response.setContentType("application/pdf");
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormat.format(new java.util.Date());
        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=DatosEscolares_" + currentDateTime + ".pdf";
        response.setHeader(headerKey, headerValue);

        List<DatosEscolares> listaDatosEscolares = datosEscolaresService.getAllDatosEscolares();
        EscolaresExporterPDF exporter = new EscolaresExporterPDF(listaDatosEscolares);
        exporter.exportar(response);
    }

    @GetMapping("/exportar/excel")
    public void exportarExcel(HttpServletResponse response) throws IOException {
        response.setContentType("application/octet-stream");
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormat.format(new java.util.Date());
        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=DatosEscolares_" + currentDateTime + ".xlsx";
        response.setHeader(headerKey, headerValue);

        List<DatosEscolares> listaDatosEscolares = datosEscolaresService.getAllDatosEscolares();
        EscolaresExcel exporter = new EscolaresExcel(listaDatosEscolares);
        exporter.exportar(response);
    }
}

