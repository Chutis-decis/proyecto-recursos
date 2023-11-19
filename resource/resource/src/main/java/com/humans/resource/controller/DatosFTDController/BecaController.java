package com.humans.resource.controller.DatosFTDController;

import com.humans.resource.entity.DatosFTD.Beca;
import com.humans.resource.service.DatosFTDService.BecaService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<Beca> getAllBecas() {
        return becaService.getAllBecas();
    }

    @GetMapping("/{id}")
    public Beca getBecaById(@PathVariable Long id) {
        return becaService.getBecaById(id);
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
