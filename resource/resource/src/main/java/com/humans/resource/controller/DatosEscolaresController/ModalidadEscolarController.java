package com.humans.resource.controller.DatosEscolaresController;

import com.humans.resource.entity.DatosEscolares.ModalidadEscolar;
import com.humans.resource.entity.DatosEscolares.PlanEducativo;
import com.humans.resource.service.DatosEscolaresService.ModalidadEscolarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/modalidad-escolar")
@CrossOrigin(origins = "http://localhost:4200")
public class ModalidadEscolarController {
    @Autowired
    private ModalidadEscolarService modalidadEscolarService;

    @GetMapping
    public List<ModalidadEscolar> getAllModalidadEscolar(){return modalidadEscolarService.getModalidadEscolar();}

    @GetMapping ("/{id}")
    public ModalidadEscolar agregarById(@PathVariable Long id){
        return modalidadEscolarService.getModalidadEscolarById(id);
    }
    @PostMapping
    public ModalidadEscolar agregarModalidadEscolar(@RequestBody ModalidadEscolar modalidadEscolar) {
        return modalidadEscolarService.agregarModalidadEscolar(modalidadEscolar);
    }

    @PutMapping("/{id}")
    public ModalidadEscolar actualizarModalidadEscolar(@PathVariable Long id, @RequestBody ModalidadEscolar modalidadEscolar) {
        return modalidadEscolarService.modificarModalidadEscolar(id, modalidadEscolar);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTramite(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            modalidadEscolarService.eliminarModalidadEscolar(id);
        } catch (DataAccessException e) {
            response.put("message", "Error al realizar la eliminación lógica en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "Eliminación lógica exitosa");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    @DeleteMapping("/recuperacion/{id}")
    public ResponseEntity<?> activatedModalidad(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            modalidadEscolarService.activateModalidadEscolar(id);
        } catch (DataAccessException e) {
            response.put("message", "Error al realizar la eliminación lógica en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "Eliminación lógica exitosa");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }
}
