package com.humans.resource.controller.DatosFTDController;

import com.humans.resource.entity.DatosFTD.Curso;
import com.humans.resource.entity.DatosFTD.Tutor;
import com.humans.resource.service.DatosFTDService.TutorService;
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
@RequestMapping("/tutor")
@CrossOrigin (origins = "http://localhost:4200")
public class TutorController {

 private final TutorService tutorService;

    @Autowired
    public TutorController(TutorService tutorService) {
        this.tutorService = tutorService;
    }


    @GetMapping
    public ResponseEntity<List<Tutor>> getAlltutores(){
        List<Tutor> tutors = tutorService.getAlltutores();
        return  new ResponseEntity<>(tutors, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tutor> getTutorById(@PathVariable Long id) {
        Optional<Tutor> tutorOptional = tutorService.getTutorById(id);
        return tutorOptional.map(tutor -> new ResponseEntity<>(tutor, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Tutor> createTutor(@RequestBody  Tutor tutor) {
        Tutor savedTutor = tutorService.saveTutor(tutor);
        return new ResponseEntity<>(savedTutor, HttpStatus.CREATED);
    }




    @PutMapping("/{id}")
    public ResponseEntity<Tutor> updateTutor(@PathVariable Long id, @RequestBody Tutor tutor) {
        if (!tutorService.getTutorById(id).isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        tutor.setId(id);
        Tutor updateTutor = tutorService.saveTutor(tutor);
        return new ResponseEntity<>(updateTutor, HttpStatus.OK);
    }

    // Delete a Tutor
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTutor(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            tutorService.deleteTutor(id);
        } catch (DataAccessException e) {
            response.put("message", "Error al realizar la eliminación lógica en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "Eliminación lógica exitosa");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    @DeleteMapping("/recuperacion/{id}")
    public ResponseEntity<?> activatedTutor(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            tutorService.activateTutor(id);
        } catch (DataAccessException e) {
            response.put("message", "Error al realizar la eliminación lógica en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "Eliminación lógica exitosa");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminarTutor(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            tutorService.eliminarTutor(id);
        } catch (DataAccessException e) {
            response.put("message", "Error al realizar la eliminación lógica en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "Eliminación lógica exitosa");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }
}
