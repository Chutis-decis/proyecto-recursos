package com.humans.resource.controller.DatosIngresoController;

import com.humans.resource.entity.DatosIngreso.DatosIngreso;
import com.humans.resource.entity.DatosIngreso.Modalidad;
import com.humans.resource.repository.DatosIngresooRepository.DatosIngresoService;
import com.humans.resource.service.DatosIngresoService.ModalidadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin (origins = "http://localhost:4200")
@RequestMapping("/modalidades")
public class ModalidadController {

    private final ModalidadService modalidadService;
    private final DatosIngresoService datosIngresoService;

    @Autowired
    public ModalidadController(ModalidadService modalidadService, DatosIngresoService datosIngresoService) {
        this.modalidadService = modalidadService;
        this.datosIngresoService = datosIngresoService;
    }

    @PostMapping
    public ResponseEntity<Modalidad> createModalidad(@RequestBody Modalidad modalidad) {
        Modalidad createdModalidad = modalidadService.createModalidad(modalidad);
        if (createdModalidad != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createdModalidad);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping
    public List<Modalidad> listarPerfilamientos() {
        return modalidadService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getModalidadById(@PathVariable Long id) {
        Modalidad modalidad = null;
        Map<String, Object> response = new HashMap<>();

        try {
            modalidad = modalidadService.getModalidadById(id);
        }catch (DataAccessException e){
            response.put("message", "Error al realizar la consulta en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if (modalidad == null){
            response.put("mensaje", "El tramite con el ID ".concat(id.toString().concat(" no existe en la base de datos")));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Modalidad>(modalidad, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Modalidad> updateModalidad(@PathVariable Long id, @RequestBody Modalidad updatedModalidad) {
        Modalidad modalidad = modalidadService.updateModalidad(id, updatedModalidad);
        if (modalidad != null) {
            return ResponseEntity.ok(modalidad);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTramite(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            modalidadService.deleteModalidad(id);
        } catch (DataAccessException e) {
            response.put("message", "Error al realizar la eliminación lógica en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "Eliminación lógica exitosa");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    @GetMapping("/{modalidadId}/datos-ingreso")
    public ResponseEntity<List<DatosIngreso>> getDatosIngresoByModalidadId(@PathVariable Long modalidadId) {
        List<DatosIngreso> datosIngresoList = datosIngresoService.getDatosIngresoByModalidadId(modalidadId);
        return ResponseEntity.ok(datosIngresoList);
    }

    // Operación CREATE - Agregar una nueva DatosIngreso relacionada con una Modalidad
    @PostMapping("/{modalidadId}/datos-ingreso")
    public ResponseEntity<DatosIngreso> createDatosIngresoForModalidad(@PathVariable Long modalidadId, @RequestBody DatosIngreso datosIngreso) {
        Modalidad modalidad = modalidadService.getModalidadById(modalidadId);
        if (modalidad != null) {
            datosIngreso.setModalidad(modalidad);
            DatosIngreso createdDatosIngreso = datosIngresoService.saveDatosIngreso(datosIngreso);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdDatosIngreso);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/recuperacion/{id}")
    public ResponseEntity<?> activateModalidad(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            modalidadService.activateModalidad(id);
        } catch (DataAccessException e) {
            response.put("message", "Error al realizar la eliminación lógica en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "Recuperación lógica exitosa");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity <?> eliminarModalidad(@PathVariable Long id) {
        Map<String, Object>response = new HashMap<>();
        try{
            modalidadService.eliminarModalidad(id);
        }catch (DataAccessException e){
            response.put("mensaje", "Error al eliminar el tramite");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response , HttpStatus.INTERNAL_SERVER_ERROR);
        }
        response.put("mensaje", "Tramite eliminado con exito");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }
}
