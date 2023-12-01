package com.humans.resource.controller.DatosFTDController;

import com.humans.resource.entity.DatosFTD.Tutor;
import com.humans.resource.service.DatosFTDService.TutorService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
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
    public ResponseEntity<?> getTutorById(@PathVariable Long id) {
        Tutor tutor = null;
        Map<String, Object> response = new HashMap<>();

        try {
            tutor = tutorService.getTutorById(id);
        }catch (DataAccessException e){
            //Errores desde el servidor de la bd
            response.put("mensaje", "Error al realizar la consulta en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if(tutor == null){
            response.put("mensaje", "El tipo de beca con el ID ".concat(id.toString().concat(" no existe en la base de datos")));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Tutor>(tutor, HttpStatus.OK);
    }

    @PostMapping
    public Tutor createTutor(@RequestBody Tutor tutor) {
        return tutorService.saveTutor(tutor);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTutor(@RequestBody Tutor tutor, @PathVariable Long id) {
        Tutor tutorActual = tutorService.getTutorById(id);
        Tutor tutorUpdate =null;

        Map<String, Object> response = new HashMap<>();

        if(tutorActual == null){
            response.put("mensaje", "Error: no se puede editar el Tutor ID ".concat(id.toString().concat(" no existe en la base de datos")));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }

        try{
            tutorActual.setNombre(tutor.getNombre());
            tutorUpdate =tutorService.saveTutor(tutorActual);
        }catch (DataAccessException e){
            response.put("mensaje", "Error al actualizar la bases de datos");
            response.put("error",e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "El cliente ha sido creado con exito!!!");
        response.put("cliente", tutorUpdate);

        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public void deleteTutor(@PathVariable Long id) {
        tutorService.deleteTutor(id);
    }
}
