package com.humans.resource.controller.DatosFTDController;

import com.humans.resource.entity.DatosFTD.Curso;
import com.humans.resource.entity.DatosFTD.Tutor;
import com.humans.resource.service.DatosFTDService.TutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tutor")
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
    public ResponseEntity<Void> deleteTutor(@PathVariable Long id) {
        if (!tutorService.getTutorById(id).isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        tutorService.deleteTutor(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

