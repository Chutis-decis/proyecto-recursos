package com.humans.resource.controller;

import com.humans.resource.entity.Grupo;
import com.humans.resource.service.GrupoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/grupos")
public class GrupoController {
    private final GrupoService grupoService;

    @Autowired
    public GrupoController(GrupoService grupoService) {
        this.grupoService = grupoService;
    }

    @GetMapping
    public List<Grupo> getAllGrupos() {
        return grupoService.getAllGrupos();
    }

    @GetMapping("/{id}")
    public Optional<Grupo> getGrupoById(@PathVariable Long id) {
        return grupoService.getGrupoById(id);
    }

    @PostMapping
    public Grupo saveGrupo(@RequestBody Grupo grupo) {
        return grupoService.saveGrupo(grupo);
    }

    @PutMapping("/{id}")
    public Grupo updateGrupo(@PathVariable Long id, @RequestBody Grupo grupo) {
        // Ensure the provided ID matches the path variable
        if (!id.equals(grupo.getId())) {
            throw new IllegalArgumentException("ID in the path variable must match the ID in the request body");
        }

        return grupoService.saveGrupo(grupo);
    }

    @DeleteMapping("/{id}")
    public void deleteGrupo(@PathVariable Long id) {
        grupoService.deleteGrupo(id);
    }

}
