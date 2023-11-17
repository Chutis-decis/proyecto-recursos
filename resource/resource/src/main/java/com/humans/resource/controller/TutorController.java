package com.humans.resource.controller;

import com.humans.resource.entity.Tutor;
import com.humans.resource.service.TutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tutors")
public class TutorController {

    private final TutorService tutorService;

    @Autowired
    public TutorController(TutorService tutorService) {
        this.tutorService = tutorService;
    }

    @GetMapping
    public List<Tutor> getAllTutors() {
        return tutorService.getAllTutors();
    }

    @GetMapping("/{id}")
    public Tutor getTutorById(@PathVariable Long id) {
        return tutorService.getTutorById(id).orElse(null);
    }

    @PostMapping
    public Tutor createTutor(@RequestBody Tutor tutor) {
        return tutorService.saveTutor(tutor);
    }

    @PutMapping("/{id}")
    public Tutor updateTutor(@PathVariable Long id, @RequestBody Tutor tutor) {
        // Ensure that the tutor ID in the path matches the ID in the request body
        if (!id.equals(tutor.getId())) {
            throw new IllegalArgumentException("Tutor ID in path must match ID in request body");
        }
        return tutorService.saveTutor(tutor);
    }

    @DeleteMapping("/{id}")
    public void deleteTutor(@PathVariable Long id) {
        tutorService.deleteTutor(id);
    }
}
