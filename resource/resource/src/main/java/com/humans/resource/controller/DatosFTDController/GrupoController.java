package com.humans.resource.controller.DatosFTDController;

import com.humans.resource.entity.DatosFTD.Grupo;
import com.humans.resource.service.DatosFTDService.GrupoService;
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
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/grupos")
public class GrupoController {
    private final GrupoService grupoService;

    @Autowired
    public GrupoController(GrupoService grupoService) {
        this.grupoService = grupoService;
    }

    @GetMapping
    public List<Grupo> getAllGrupos() {
        return grupoService.getAllGrupos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getGrupoById(@PathVariable Long id) {
        Grupo grupo = null;
        Map<String, Object> response = new HashMap<>();

        try {
            grupo = grupoService.getGrupoById(id);
        }catch (DataAccessException e){
            //Errores desde el servidor de la bd
            response.put("mensaje", "Error al realizar la consulta en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if(grupo == null){
            response.put("mensaje", "El grupo con el ID ".concat(id.toString().concat(" no existe en la base de datos")));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Grupo>(grupo, HttpStatus.OK);
    }

    @PostMapping
    public Grupo saveGrupo(@RequestBody Grupo grupo) {
        return grupoService.saveGrupo(grupo);
    }

    @PutMapping("/{id}")
    public Grupo updateGrupo(@PathVariable Long id, @RequestBody Grupo grupo) {
        // Ensure the provided ID matches the path variable
        if (!id.equals(grupo.getId())) {
            throw new IllegalArgumentException("ID in the path variable must match the ID in the request body");
        }

        return grupoService.saveGrupo(grupo);
    }

    @DeleteMapping("/{id}")
    public void deleteGrupo(@PathVariable Long id) {
        grupoService.deleteGrupo(id);
    }

}
