package com.humans.resource.controller;

import com.humans.resource.entity.DatosIngreso;
import com.humans.resource.entity.Modalidad;
import com.humans.resource.entity.Perfilamiento;
import com.humans.resource.repository.DatosIngresoService;
import com.humans.resource.service.ModalidadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/modalidades")
@CrossOrigin(origins = "http://localhost:4200")
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

    @GetMapping("/{id}")
    public ResponseEntity<Modalidad> getModalidadById(@PathVariable Long id) {
        Modalidad modalidad = modalidadService.getModalidadById(id);
        if (modalidad != null) {
            return ResponseEntity.ok(modalidad);
        } else {
            return ResponseEntity.notFound().build();
        }
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
    public ResponseEntity<Void> deleteModalidad(@PathVariable Long id) {
        boolean deleted = modalidadService.deleteModalidad(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
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
}
