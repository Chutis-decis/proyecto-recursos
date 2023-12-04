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




import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.http.HttpStatus;
        import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.*;

        import java.util.List;

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
    public ResponseEntity<List<Beca>> getAllBecas() {
        List<Beca> becas = becaService.getAllBecas();
        return new ResponseEntity<>(becas, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Beca> getBecaById(@PathVariable Long id) {
        Beca beca = becaService.getBecaById(id);
        return beca != null ? new ResponseEntity<>(beca, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<Beca> createBeca(@RequestBody Beca beca) {
        Beca savedBeca = becaService.saveBeca(beca);
        return new ResponseEntity<>(savedBeca, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Beca> updateBeca(@PathVariable Long id, @RequestBody Beca beca) {
        Beca existingBeca = becaService.getBecaById(id);

        if (existingBeca != null) {
            beca.setId(id);
            Beca updatedBeca = becaService.saveBeca(beca);
            return new ResponseEntity<>(updatedBeca, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBeca(@PathVariable Long id) {
        Beca existingBeca = becaService.getBecaById(id);

        if (existingBeca != null) {
            becaService.deleteBeca(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
