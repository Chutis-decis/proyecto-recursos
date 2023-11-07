package com.humans.resource.controller;

import com.humans.resource.entity.Universidad;
import com.humans.resource.service.UniversidadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/universidades")
public class UniversidadController {


    @Autowired
    private UniversidadService universityService;

    @PostMapping
    public ResponseEntity<Universidad> addUniversity(@RequestBody Universidad university) {
        Universidad createdUniversity = universityService.addUniversity(university);
        return new ResponseEntity<>(createdUniversity, HttpStatus.CREATED);
    }

    @DeleteMapping("/{universityId}")
    public ResponseEntity<Void> deleteUniversity(@PathVariable Long universityId) {
        universityService.deleteUniversity(universityId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{universityId}")
    public ResponseEntity<Universidad> updateUniversity(@PathVariable Long universityId, @RequestBody Universidad university) {
        Universidad updatedUniversity = universityService.updateUniversity(universityId, university);
        if (updatedUniversity == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(updatedUniversity, HttpStatus.OK);
    }
}
