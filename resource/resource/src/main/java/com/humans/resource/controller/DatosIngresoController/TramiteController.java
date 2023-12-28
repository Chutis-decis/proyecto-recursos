package com.humans.resource.controller.DatosIngresoController;

import com.humans.resource.entity.DatosEscolares.PlanEducativo;
import com.humans.resource.entity.DatosIngreso.Tramite;
import com.humans.resource.service.DatosIngresoService.TramiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin (origins = "http://localhost:4200")
    @RequestMapping("/tramites")
    public class TramiteController {
        private final TramiteService tramiteService;

        @Autowired
        public TramiteController(TramiteService tramiteService) {
            this.tramiteService = tramiteService;
        }

        // Create endpoint for retrieving all Tramites
        @GetMapping
        public List<Tramite> getAllTramites() {
            return tramiteService.getAllTramites();
        }

        // Create endpoint for retrieving a specific Tramite by ID
        @GetMapping("/{id}")
        public ResponseEntity<?> getTramiteById(@PathVariable Long id) {
            Tramite tramite = null;
            Map<String, Object> response = new HashMap<>();

            try {
                tramite = tramiteService.getTramiteById(id);
            }catch (DataAccessException e){
                response.put("message", "Error al realizar la consulta en la base de datos");
                response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
                return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
            }
            if (tramite == null){
                response.put("mensaje", "El tramite con el ID ".concat(id.toString().concat(" no existe en la base de datos")));
                return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
            }

            return new ResponseEntity<Tramite>(tramite, HttpStatus.OK);
        }
        // Create endpoint for creating a new Tramite
        @PostMapping
        public Tramite createTramite(@RequestBody Tramite tramite) {
            return tramiteService.createTramite(tramite);
        }


        @PutMapping("/{id}")
        public Tramite updateTramite(@PathVariable Long id, @RequestBody Tramite tramite) {
            return tramiteService.updateTramite(id, tramite);
        }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTramite(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            tramiteService.deleteTramite(id);
        } catch (DataAccessException e) {
            response.put("message", "Error al realizar la eliminación lógica en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "Eliminación lógica exitosa");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    @DeleteMapping("/recuperacion/{id}")
    public ResponseEntity<?> activateTramite(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            tramiteService.activateTramite(id);
        } catch (DataAccessException e) {
            response.put("message", "Error al realizar la eliminación lógica en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "Eliminación lógica exitosa");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity <?> eliminarTramite(@PathVariable Long id) {
        Map<String, Object>response = new HashMap<>();
        try{
            tramiteService.eliminarTramite(id);
        }catch (DataAccessException e){
            response.put("mensaje", "Error al eliminar el tramite");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response , HttpStatus.INTERNAL_SERVER_ERROR);
        }
        response.put("mensaje", "Tramite eliminado con exito");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }
}

