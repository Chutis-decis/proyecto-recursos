package com.humans.resource.controller.DatosFTDController;

import com.humans.resource.entity.DatosFTD.Grupo;
import com.humans.resource.service.DatosFTDService.GrupoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/grupos")
@CrossOrigin (origins = "http://localhost:4200")
public class GrupoController {

    private final GrupoService grupoService;

    @Autowired
    public GrupoController(GrupoService grupoService) {
        this.grupoService = grupoService;
    }

    @GetMapping
    public ResponseEntity<List<Grupo>> getAllGrupos() {
        List<Grupo> grupos = grupoService.getAllGrupos();
        return ResponseEntity.ok(grupos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Grupo> getGrupoById(@PathVariable Long id) {
        return grupoService.getGrupoById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Grupo> createGrupo(@RequestBody Grupo grupo) {
        Grupo savedGrupo = grupoService.saveGrupo(grupo);
        return ResponseEntity.ok(savedGrupo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Grupo> updateGrupo(@PathVariable Long id, @RequestBody Grupo grupo) {
        if (!grupoService.getGrupoById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }

        grupo.setId(id);
        Grupo updatedGrupo = grupoService.saveGrupo(grupo);
        return ResponseEntity.ok(updatedGrupo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGrupo(@PathVariable Long id) {
        if (!grupoService.getGrupoById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }

        grupoService.deleteGrupo(id);
        return ResponseEntity.noContent().build();
    }
}
