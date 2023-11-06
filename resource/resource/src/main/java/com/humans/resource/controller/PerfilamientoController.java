package com.humans.resource.controller;

import com.humans.resource.entity.Perfilamiento;
import com.humans.resource.service.PerfilamientoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin (origins = "http://localhost:4200")
@RequestMapping("/perfilamiento")
public class PerfilamientoController {
    private final PerfilamientoService perfilamientoService;

    @Autowired
    public PerfilamientoController(PerfilamientoService perfilamientoService) {
        this.perfilamientoService = perfilamientoService;
    }

    @GetMapping
    public List<Perfilamiento> listarPerfilamientos() {
        return perfilamientoService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Perfilamiento> obtenerPerfilamiento(@PathVariable Long id) {
        Perfilamiento perfilamiento = perfilamientoService.buscarPorId(id);
        if (perfilamiento != null) {
            return new ResponseEntity<>(perfilamiento, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Perfilamiento> crearPerfilamiento(@RequestBody Perfilamiento perfilamiento) {
        Perfilamiento nuevoPerfilamiento = perfilamientoService.guardarPerfilamiento(perfilamiento);
        return new ResponseEntity<>(nuevoPerfilamiento, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Perfilamiento> actualizarPerfilamiento(@PathVariable Long id, @RequestBody Perfilamiento perfilamiento) {
        Perfilamiento existente = perfilamientoService.buscarPorId(id);
        if (existente != null) {
            perfilamiento.setId(id);
            Perfilamiento actualizadoPerfilamiento = perfilamientoService.guardarPerfilamiento(perfilamiento);
            return new ResponseEntity<>(actualizadoPerfilamiento, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarPerfilamiento(@PathVariable Long id) {
        Perfilamiento existente = perfilamientoService.buscarPorId(id);
        if (existente != null) {
            perfilamientoService.eliminarPerfilamiento(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}