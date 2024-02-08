package com.humans.resource.controller.DatosPersonalesController;

import com.humans.resource.entity.DatosFTD.Beca;
import com.humans.resource.entity.DatosPersonales.DatosPersonales;
import com.humans.resource.reportes.DatosExporterPDF;
import com.humans.resource.reportes.EXCEL.DatosExporterExcel;
import com.humans.resource.repository.DatosPersonalesRepository.DatosPersonalesService;
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
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
    @RequestMapping("/datos-personales")
    @CrossOrigin(origins = "http://localhost:4200")
    public class DatosPersonalesController {

        private final DatosPersonalesService datosPersonalesService;

        @Autowired
        public DatosPersonalesController(DatosPersonalesService datosPersonalesService) {
            this.datosPersonalesService = datosPersonalesService;
        }

        @PostMapping
        public DatosPersonales crearDatosPersonales(@RequestBody DatosPersonales datosPersonales) {
            return datosPersonalesService.createDatosPersonales(datosPersonales);
        }

    // Endpoint para actualizar todos los datos de una instancia de DatosPersonales
    @PutMapping("/{id}")
    public ResponseEntity<DatosPersonales> actualizarDatosPersonales(@PathVariable Long id, @RequestBody DatosPersonales datosNuevos) {
        DatosPersonales datosActualizados = datosPersonalesService.actualizarDatosPersonales(id, datosNuevos);
        if (datosActualizados != null) {
            return new ResponseEntity<>(datosActualizados, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

        @GetMapping("/{id}")
        public ResponseEntity<?> obtenerDatosPersonalesPorId(@PathVariable Long id) {
            DatosPersonales datosPersonales = null;
            Map<String, Object> response = new HashMap<>();
            try {
                datosPersonales = datosPersonalesService.getDatosPersonalesById(id);
            }catch (DataAccessException e){
                response.put("mensaje", "Error al realizar la consulta a la base de datos");
                response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
                return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
            }
            if(datosPersonales == null){
                response.put("mensaje", "el cliente ID ".concat(id.toString().concat(" no existe en la base de datos")));
                return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<DatosPersonales>(datosPersonales, HttpStatus.OK);
        }

        @GetMapping
        public List<DatosPersonales> listarDatosPersonales() {
            return datosPersonalesService.getAllDatosPersonales();
        }



        @DeleteMapping("/{id}")
        public void eliminarDatosPersonales(@PathVariable Long id) {
            datosPersonalesService.deleteDatosPersonales(id);
        }

        @DeleteMapping("/recuperacion/{id}")
        public void recuperarDatosPersonales(@PathVariable Long id){datosPersonalesService.activateDatosPersonales(id);}

        @DeleteMapping("/eliminar/{id}")
        public void eliminarDatosPersonalesDefinitivamente(@PathVariable Long id){datosPersonalesService.eliminarDatosPersonales(id);}

    @GetMapping("/exportarPDF")
    public void exportarListadoDatosPersonalesPDF(HttpServletResponse response) throws IOException, DocumentException {
        response.setContentType("application/pdf");

        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String fechaActual = dateFormatter.format(new java.util.Date());

        String cabecera = "Content-Disposition";
        String valor = "attachment; filename=DatosPersonales_" + fechaActual + ".pdf";
        response.setHeader(cabecera, valor);

        List<DatosPersonales> listaDatosPersonales = datosPersonalesService.getAllDatosPersonales();

        DatosExporterPDF exporterPDF = new DatosExporterPDF(listaDatosPersonales);
        exporterPDF.exportar(response);
    }

    @GetMapping("/exportarExcel")
    public void exportarListadoDeDatosPersonalesEnExcel(HttpServletResponse response) throws DocumentException, IOException {
        response.setContentType("application/octet-stream");

        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String fechaActual = dateFormatter.format(new Date());

        String cabecera = "Content-Disposition";
        String valor = "attachment; filename=DatosPersonales_" + fechaActual + ".xml";

        response.setHeader(cabecera, valor);

        List<DatosPersonales> personas = datosPersonalesService.getAllDatosPersonales();

        DatosExporterExcel exporter = new DatosExporterExcel(personas);
        exporter.exportar(response);
    }
}

