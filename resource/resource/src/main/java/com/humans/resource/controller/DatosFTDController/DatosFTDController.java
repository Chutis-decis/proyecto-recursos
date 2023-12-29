package com.humans.resource.controller.DatosFTDController;

import com.humans.resource.entity.DatosFTD.DatosFTD;
import com.humans.resource.service.DatosFTDService.DatosFTDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

import org.springframework.http.HttpStatus;

import javax.xml.crypto.Data;


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
    public ResponseEntity<?> getDatosFTDById(@PathVariable Long id) {
        DatosFTD datosFTD = null;
        Map<String, Object> response = new HashMap<>();

        try {
            datosFTD = datosFTDService.getDatosFTDById(id).orElse(null);
        }catch (DataAccessException e){
            response.put("mensaje", "Error al realizar la consulta a la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if (datosFTD == null) {
            response.put("mensaje", "el dato FTD id: ".concat(id.toString().concat(" no existe en la base de datos")));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<DatosFTD>(datosFTD, HttpStatus.OK);
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

    @DeleteMapping("recuperacion/{id}")
    public ResponseEntity<Void> recuperacionDatosFtd(@PathVariable Long id){
        if (!datosFTDService.getDatosFTDById(id).isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        datosFTDService.activatedDatosFTD(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("eliminar/{id}")
    public ResponseEntity<?> eliminacionDatosFtd(@PathVariable Long id){
        Map<String, Object> response = new HashMap<>();

        try{
            datosFTDService.delete(id);
        }catch (DataAccessException e){
            response.put("message", "Error al realizar la eliminación lógica en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        response.put("message", "Eliminacion exitosa!!!");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }
}
