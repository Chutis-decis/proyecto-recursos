package com.humans.resource.controller.DatosEscolaresController;

import com.humans.resource.entity.DatosEscolares.Periodo;
import com.humans.resource.service.DatosEscolaresService.PeriodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/periodo")
@CrossOrigin(origins = "http://localhost:4200")
public class PeriodoController {

    @Autowired
    private PeriodoService periodoService;

    @GetMapping
    public List<Periodo> getAll(){
        return periodoService.getPeriodo();
    }

    @GetMapping("/{id}")
    public ResponseEntity <?> findById (@PathVariable Long id){
        Periodo periodo = null;
        Map<String, Object> response = new HashMap<>();

        try {
            periodo = periodoService.getPeriodoById(id);
        }catch (DataAccessException e){
            response.put("mensaje", "Error al realizar la consulta en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if(periodo == null){
            response.put("mensaje", "el periodo ID ".concat(id.toString().concat(" no existe en la base de datos")));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Periodo>(periodo, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?>create(@RequestBody Periodo periodo){
        Periodo newPeriodo = null;
        Map<String, Object>response = new HashMap<>();

        try {
            newPeriodo = periodoService.addPeriodo(periodo);
        }catch (DataAccessException e){
            response.put("mensaje", "Error al realizar el insert en la bases de datos");
            response.put("error",e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "El cliente ha sido creado con exito!!!");
        response.put("cliente", newPeriodo);

        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?>update(@RequestBody Periodo periodo, @PathVariable Long id){
        Periodo periodoActual = periodoService.getPeriodoById(id);
        Periodo periodoUpdate = null;

        Map<String, Object> response = new HashMap<>();

        if (periodoActual == null){
            response.put("mensaje", "Error: no se puede editar el periodo ID ".concat(id.toString().concat(" no existe en la base de datos")));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }

        try {
            periodoActual.setNombre(periodo.getNombre());

            periodoUpdate = periodoService.addPeriodo(periodoActual);
        }catch (DataAccessException e){
            response.put("mensaje", "Error al actualizar la bases de datos");
            response.put("error",e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "El periodo ha sido actualizado con exito!!!");
        response.put("cliente", periodoUpdate);
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete (@PathVariable Long id){
        Map<String, Object> response = new HashMap<>();

        try {
            periodoService.deletePeriodo(id);
        }catch (DataAccessException e){
            response.put("mensaje", "Error al delete la bases de datos");
            response.put("error",e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "El periodo ha sido eliminado con exito!!!");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    @DeleteMapping("/recuperacion/{id}")
    public ResponseEntity<?> activiatedPeriodo (@PathVariable Long id){
        Map<String, Object> response = new HashMap<>();

        try {
            periodoService.activatePeriodo(id);
        }catch (DataAccessException e){
            response.put("mensaje", "Error al delete la bases de datos");
            response.put("error",e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "El periodo ha sido eliminado con exito!!!");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity <?> eliminarPeriodo(@PathVariable Long id) {
        Map<String, Object>response = new HashMap<>();
        try{
            periodoService.eliminarPeriodo(id);
        }catch (DataAccessException e){
            response.put("mensaje", "Error al eliminar el periodo");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response , HttpStatus.INTERNAL_SERVER_ERROR);
        }
        response.put("mensaje", "Periodo eliminado con exito");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }
}
