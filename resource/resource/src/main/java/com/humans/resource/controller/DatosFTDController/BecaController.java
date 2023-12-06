package com.humans.resource.controller.DatosFTDController;

import com.humans.resource.entity.DatosFTD.Beca;
import com.humans.resource.service.DatosFTDService.BecaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
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
        return ResponseEntity.ok(becas);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Beca> getBecaById(@PathVariable Long id) {
        return becaService.getBecaById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
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
    public ResponseEntity<Void> deleteBeca(@PathVariable Long id) {
        if (!becaService.getBecaById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }

        becaService.deleteBeca(id);
        return ResponseEntity.noContent().build();
    }
}
