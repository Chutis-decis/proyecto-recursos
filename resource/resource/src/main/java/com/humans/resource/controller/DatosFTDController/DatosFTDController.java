package com.humans.resource.controller.DatosFTDController;

import com.humans.resource.entity.DatosFTD.DatosFTD;
import com.humans.resource.service.DatosFTDService.DatosFTDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.springframework.http.HttpStatus;
import java.util.Optional;

@RestController
@RequestMapping("/datosftd")
@CrossOrigin(origins = "http://localhost:4200")
public class DatosFTDController {

    private final DatosFTDService datosFTDService;

    @Autowired
    public DatosFTDController(DatosFTDService datosFTDService) {
        this.datosFTDService = datosFTDService;
    }

    // Create
    @PostMapping
    public ResponseEntity<DatosFTD> createDatosFTD(@RequestBody DatosFTD datosFTD) {
        DatosFTD createdDatosFTD = datosFTDService.saveDatosFTD(datosFTD);
        return new ResponseEntity<>(createdDatosFTD, HttpStatus.CREATED);
    }

    // Read
    @GetMapping("/{id}")
    public ResponseEntity<DatosFTD> getDatosFTDById(@PathVariable Long id) {
        Optional<DatosFTD> datosFTD = datosFTDService.getDatosFTDById(id);
        return datosFTD.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    public ResponseEntity<List<DatosFTD>> getAllDatosFTD() {
        List<DatosFTD> allDatosFTD = datosFTDService.getAllDatosFTD();
        return new ResponseEntity<>(allDatosFTD, HttpStatus.OK);
    }

    // Update
    @PutMapping("/{id}")
    public ResponseEntity<DatosFTD> updateDatosFTD(@PathVariable Long id, @RequestBody DatosFTD datosFTD) {
        Optional<DatosFTD> existingDatosFTD = datosFTDService.getDatosFTDById(id);
        if (existingDatosFTD.isPresent()) {
            datosFTD.setId(id);
            DatosFTD updatedDatosFTD = datosFTDService.saveDatosFTD(datosFTD);
            return new ResponseEntity<>(updatedDatosFTD, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDatosFTD(@PathVariable Long id) {
        Optional<DatosFTD> datosFTD = datosFTDService.getDatosFTDById(id);
        if (datosFTD.isPresent()) {
            datosFTDService.deleteDatosFTD(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

