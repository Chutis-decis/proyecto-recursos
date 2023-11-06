package com.humans.resource.controller;

import com.humans.resource.entity.Tramite;
import com.humans.resource.service.TramiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin (origins = "http://localhost:4200")
    @RequestMapping("/tramites")
    public class TramiteController {
        private final TramiteService tramiteService;

        @Autowired
        public TramiteController(TramiteService tramiteService) {
            this.tramiteService = tramiteService;
        }

        // Create endpoint for retrieving all Tramites
        @GetMapping
        public List<Tramite> getAllTramites() {
            return tramiteService.getAllTramites();
        }

        // Create endpoint for retrieving a specific Tramite by ID
        @GetMapping("/{id}")
        public ResponseEntity<Tramite> getTramite(@PathVariable Long id) {
            Optional<Tramite> optionalTramite = tramiteService.getTramiteById(id);
            return optionalTramite.map(tramite -> new ResponseEntity<>(tramite, HttpStatus.OK))
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
        }
        // Create endpoint for creating a new Tramite
        @PostMapping
        public Tramite createTramite(@RequestBody Tramite tramite) {
            return tramiteService.createTramite(tramite);
        }

        // Create endpoint for updating an existing Tramite
        @PutMapping("/{id}")
        public Tramite updateTramite(@PathVariable Long id, @RequestBody Tramite tramite) {
            return tramiteService.updateTramite(id, tramite);
        }

        // Create endpoint for deleting a Tramite by ID
        @DeleteMapping("/{id}")
        public void deleteTramite(@PathVariable Long id) {
            tramiteService.deleteTramite(id);
        }
    }

