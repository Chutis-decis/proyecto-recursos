package com.humans.resource.controller;

import com.humans.resource.entity.Universidad;
import com.humans.resource.service.UniversidadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/datos-escolares/universidad")
@CrossOrigin (origins = "http://localhost:4200")
public class UniversidadController {
    //***************************************** UNIVERSIDAD ***************************************
    @Autowired
    private UniversidadService universidadService;

    @GetMapping("")
    public List<Universidad> getAllUniversities(){return  universidadService.getUniversidad();}

    @PostMapping("")
    public ResponseEntity<Universidad> addUniversity(@RequestBody Universidad university) {
        Universidad createdUniversity = universidadService.addUniversity(university);
        return new ResponseEntity<>(createdUniversity, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public Universidad actualizarUniversidad(@PathVariable Long id, @RequestBody Universidad universidad) {
        return universidadService.updateUniversity(id, universidad);
    }

    @DeleteMapping ("/{id}")
    public void deleteuniversidad(@PathVariable Long id) {
        universidadService.deleteUniversity(id);
    }
}
