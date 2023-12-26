package com.humans.resource.controller.DatosEscolaresController;

import com.humans.resource.entity.DatosEscolares.Universidad;
import com.humans.resource.service.DatosEscolaresService.UniversidadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/universidad")
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

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        Universidad universidad = null;
        Map<String, Object>response = new HashMap<>();

        try {
            universidad =universidadService.getUniversidadById(id);
        }catch (DataAccessException e){
            //Errores desde el servidor de la bd
            response.put("mensaje", "Error al realizar la consulta en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if(universidad == null){
            response.put("mensaje", "La universidad con el ID ".concat(id.toString().concat(" no existe en la base de datos")));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Universidad>(universidad, HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTramite(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            universidadService.EliminarUniversidad(id);
        } catch (DataAccessException e) {
            response.put("message", "Error al realizar la eliminación lógica en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "Eliminación lógica exitosa");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }
}