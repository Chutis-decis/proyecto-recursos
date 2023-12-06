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

    @GetMapping
    public ResponseEntity<List<DatosFTD>> getAllDatosFTD() {
        List<DatosFTD> datosFTDList = datosFTDService.getAllDatosFTD();
        return new ResponseEntity<>(datosFTDList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DatosFTD> getDatosFTDById(@PathVariable Long id) {
        Optional<DatosFTD> datosFTDOptional = datosFTDService.getDatosFTDById(id);
        return datosFTDOptional.map(datosFTD -> new ResponseEntity<>(datosFTD, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<DatosFTD> createDatosFTD(@RequestBody DatosFTD datosFTD) {
        DatosFTD savedDatosFTD = datosFTDService.saveDatosFTD(datosFTD);
        return new ResponseEntity<>(savedDatosFTD, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DatosFTD> updateDatosFTD(@PathVariable Long id, @RequestBody DatosFTD datosFTD) {
        if (!datosFTDService.getDatosFTDById(id).isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        datosFTD.setId(id);
        DatosFTD updatedDatosFTD = datosFTDService.saveDatosFTD(datosFTD);
        return new ResponseEntity<>(updatedDatosFTD, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDatosFTD(@PathVariable Long id) {
        if (!datosFTDService.getDatosFTDById(id).isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        datosFTDService.deleteDatosFTD(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
