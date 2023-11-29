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
import java.util.Objects;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/becas")
public class BecaController {
    private final BecaService becaService;

    @Autowired
    public BecaController(BecaService becaService) {
        this.becaService = becaService;
    }

    @GetMapping
    public List<Beca> getAllBecas() {
        return becaService.getAllBecas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBecaById(@PathVariable Long id) {
        Beca becas = null;
        Map<String, Object> response = new HashMap<>();

        try {
            becas = becaService.getBecaById(id);
        }catch (DataAccessException e){
            //Errores desde el servidor de la bd
            response.put("mensaje", "Error al realizar la consulta en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if(becas == null){
            response.put("mensaje", "El tipo de beca con el ID ".concat(id.toString().concat(" no existe en la base de datos")));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Beca>(becas, HttpStatus.OK);
    }

    @PostMapping
    public Beca createBeca(@RequestBody Beca beca) {
        return becaService.createBeca(beca);
    }

    @PutMapping("/{id}")
    public Beca updateBeca(@PathVariable Long id, @RequestBody Beca beca) {
        beca.setId(id);
        return becaService.updateBeca(beca);
    }

    @DeleteMapping("/{id}")
    public void deleteBeca(@PathVariable Long id) {
        becaService.deleteBeca(id);
    }
}
