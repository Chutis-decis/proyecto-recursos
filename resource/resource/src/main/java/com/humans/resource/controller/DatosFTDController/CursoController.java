package com.humans.resource.controller.DatosFTDController;

import com.humans.resource.entity.DatosFTD.Curso;
import com.humans.resource.service.DatosFTDService.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cursos")
public class CursoController {

    private final CursoService cursoService;

    @Autowired
    public CursoController(CursoService cursoService) {
        this.cursoService = cursoService;
    }

    // Create a new Curso
    @PostMapping
    public ResponseEntity<Curso> createCurso(@RequestBody Curso curso) {
        Curso savedCurso = cursoService.saveCurso(curso);
        return new ResponseEntity<>(savedCurso, HttpStatus.CREATED);
    }

    // Get all Cursos
    @GetMapping
    public ResponseEntity<List<Curso>> getAllCursos() {
        List<Curso> cursos = cursoService.getAllCursos();
        return new ResponseEntity<>(cursos, HttpStatus.OK);
    }

    // Get a Curso by ID
    @GetMapping("/{id}")
    public ResponseEntity<Curso> getCursoById(@PathVariable Long id) {
        Optional<Curso> curso = cursoService.getCursoById(id);
        return curso.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Curso> updateCurso(@PathVariable Long id, @RequestBody Curso curso) {
        Optional<Curso> existingCursoOptional = cursoService.getCursoById(id);

        if (existingCursoOptional.isPresent()) {
            Curso existingCurso = existingCursoOptional.get();
            existingCurso.setNombre(curso.getNombre()); // Update other fields as needed
            cursoService.updateCurso(existingCurso);
            return new ResponseEntity<>(existingCurso, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a Curso by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCursoById(@PathVariable Long id) {
        if (cursoService.getCursoById(id).isPresent()) {
            cursoService.deleteCursoById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

