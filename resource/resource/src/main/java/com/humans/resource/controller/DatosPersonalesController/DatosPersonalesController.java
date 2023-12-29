package com.humans.resource.controller.DatosPersonalesController;

import com.humans.resource.entity.DatosFTD.Beca;
import com.humans.resource.entity.DatosPersonales.DatosPersonales;
import com.humans.resource.repository.DatosPersonalesRepository.DatosPersonalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}

