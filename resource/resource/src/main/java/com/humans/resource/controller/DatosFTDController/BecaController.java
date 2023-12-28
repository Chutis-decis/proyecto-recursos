package com.humans.resource.controller.DatosFTDController;

import com.humans.resource.entity.DatosFTD.Beca;
import com.humans.resource.service.DatosFTDService.BecaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/becas")
@CrossOrigin (origins = "http://localhost:4200")
public class BecaController {

    private final BecaService becaService;

    @Autowired
    public BecaController(BecaService becaService) {
        this.becaService = becaService;
    }

    @GetMapping
    public ResponseEntity<List<Beca>> getAllBecas() {
        List<Beca> becas = becaService.getAllBecas();
        return ResponseEntity.ok(becas);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBecaById(@PathVariable Long id) {
        Beca beca = null;
        Map<String, Object> response = new HashMap<>();

        try{
            beca = becaService.getBecaById(id).orElse(null);
        }catch (DataAccessException e){
            response.put("mensaje", "Error al realizar la consulta a la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if(beca == null){
            response.put("mensaje", "La beca con el ID: ".concat(id.toString().concat(" no existe en la base de datos")));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Beca>(beca, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Beca> createBeca(@RequestBody Beca beca) {
        Beca savedBeca = becaService.saveBeca(beca);
        return ResponseEntity.ok(savedBeca);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Beca> updateBeca(@PathVariable Long id, @RequestBody Beca beca) {
        if (!becaService.getBecaById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }

        beca.setId(id);
        Beca updatedBeca = becaService.saveBeca(beca);
        return ResponseEntity.ok(updatedBeca);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTramite(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            becaService.deleteBeca(id);
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
            becaService.activateBeca(id);
        } catch (DataAccessException e) {
            response.put("message", "Error al realizar la eliminación lógica en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "Eliminación lógica exitosa");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminarTramite(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            becaService.eliminarBeca(id);
        } catch (DataAccessException e) {
            response.put("message", "Error al realizar la eliminación fisica en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "Eliminación fisica exitosa");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }
}
