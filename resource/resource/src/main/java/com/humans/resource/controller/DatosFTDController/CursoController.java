package com.humans.resource.controller.DatosFTDController;

import com.humans.resource.entity.DatosFTD.Curso;
import com.humans.resource.service.DatosFTDService.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@RestController
@RequestMapping("/cursos")
@CrossOrigin (origins = "http://localhost:4200")
public class CursoController {

    private final CursoService cursoService;

    @Autowired
    public CursoController(CursoService cursoService) {
        this.cursoService = cursoService;
    }

    // Get all cursos
    @GetMapping
    public ResponseEntity<List<Curso>> getAllCursos() {
        List<Curso> cursos = cursoService.getAllCursos();
        return new ResponseEntity<>(cursos, HttpStatus.OK);
    }

    // Get curso by ID
    @GetMapping("/{id}")
    public ResponseEntity<Curso> getCursoById(@PathVariable Long id) {
        Optional<Curso> cursoOptional = cursoService.getCursoById(id);
        return cursoOptional.map(curso -> new ResponseEntity<>(curso, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Create a new curso
    @PostMapping
    public ResponseEntity<Curso> createCurso(@RequestBody Curso curso) {
        Curso savedCurso = cursoService.saveCurso(curso);
        return new ResponseEntity<>(savedCurso, HttpStatus.CREATED);
    }

    // Update an existing curso
    @PutMapping("/{id}")
    public ResponseEntity<Curso> updateCurso(@PathVariable Long id, @RequestBody Curso curso) {
        if (!cursoService.getCursoById(id).isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        curso.setId(id);
        Curso updatedCurso = cursoService.saveCurso(curso);
        return new ResponseEntity<>(updatedCurso, HttpStatus.OK);
    }

    // Delete a curso
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTramite(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            cursoService.eliminarCurso(id);
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
            cursoService.activateCurso(id);
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
            cursoService.deleteCurso(id);
        } catch (DataAccessException e) {
            response.put("message", "Error al realizar la eliminación lógica en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "Eliminación lógica exitosa");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }
}