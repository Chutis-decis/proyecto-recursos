package com.humans.resource.controller.DatosIngresoController;

import com.humans.resource.entity.DatosIngreso.Perfilamiento;
import com.humans.resource.service.DatosIngresoService.PerfilamientoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin (origins = "http://localhost:4200")
@RequestMapping("/perfilamiento")
public class PerfilamientoController {
    private final PerfilamientoService perfilamientoService;

    @Autowired
    public PerfilamientoController(PerfilamientoService perfilamientoService) {
        this.perfilamientoService = perfilamientoService;
    }

    @GetMapping
    public List<Perfilamiento> listarPerfilamientos() {
        return perfilamientoService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> obtenerPerfilamiento(@PathVariable Long id) {
        Perfilamiento perfilamiento = null;
        Map<String, Object> response = new HashMap<>();

        try {
            perfilamiento = perfilamientoService.buscarPorId(id);
        }catch (DataAccessException e){
            response.put("message", "Error al realizar la consulta en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (perfilamiento == null){
            response.put("mensaje", "El perfilamiento con el ID ".concat(id.toString().concat(" no existe en la base de datos")));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Perfilamiento>(perfilamiento, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Perfilamiento> crearPerfilamiento(@RequestBody Perfilamiento perfilamiento) {
        Perfilamiento nuevoPerfilamiento = perfilamientoService.guardarPerfilamiento(perfilamiento);
        return new ResponseEntity<>(nuevoPerfilamiento, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Perfilamiento> actualizarPerfilamiento(@PathVariable Long id, @RequestBody Perfilamiento perfilamiento) {
        Perfilamiento existente = perfilamientoService.buscarPorId(id);
        if (existente != null) {
            perfilamiento.setId(id);
            Perfilamiento actualizadoPerfilamiento = perfilamientoService.guardarPerfilamiento(perfilamiento);
            return new ResponseEntity<>(actualizadoPerfilamiento, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarPerfilamiento(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            perfilamientoService.deletePerfilamiento(id);
        } catch (DataAccessException e) {
            response.put("message", "Error al realizar la eliminación lógica en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "Eliminación lógica exitosa");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    @DeleteMapping("/recuperacion/{id}")
    public ResponseEntity<?> activarPerfilamiento(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            perfilamientoService.activatePerfilamiento(id);
        } catch (DataAccessException e) {
            response.put("message", "Error al realizar la eliminación lógica en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "Eliminación lógica exitosa");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity <?> eliminaPerfilamiento(@PathVariable Long id) {
        Map<String, Object>response = new HashMap<>();
        try{
            perfilamientoService.eliminarPerfilamiento(id);
        }catch (DataAccessException e){
            response.put("mensaje", "Error al eliminar el perfilamiento");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response , HttpStatus.INTERNAL_SERVER_ERROR);
        }
        response.put("mensaje", "Perfilamiento eliminado con exito");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }
}
