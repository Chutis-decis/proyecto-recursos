package com.humans.resource.controller.DatosEscolaresController;

import com.humans.resource.entity.DatosEscolares.DatosEscolares;
import com.humans.resource.repository.DatosEscolaresRepository.DatosEscolaresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/datos-escolares")
@CrossOrigin (origins = "http://localhost:4200")
public class DatosEscolaresController {

    private final DatosEscolaresService datosEscolaresService;

    @Autowired
    public DatosEscolaresController(DatosEscolaresService datosEscolaresService) {
        this.datosEscolaresService = datosEscolaresService;
    }

    @PostMapping
    public DatosEscolares crearDatosEscolares(@RequestBody DatosEscolares datosEscolares) {
        return datosEscolaresService.createDatosEscolares(datosEscolares);
    }

    @PutMapping("/{id}")
    public DatosEscolares actualizarDatosEscolares(@PathVariable Long id, @RequestBody DatosEscolares datosEscolares) {
        return datosEscolaresService.updateDatosEscolares(id, datosEscolares);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> obtenerDatosEscolaresPorId(@PathVariable Long id) {
        DatosEscolares datosEscolares = null;
        Map<String, Object> response = new HashMap<>();

        try{
            datosEscolares = datosEscolaresService.getDatosEscolaresById(id);
        }catch (DataAccessException e){
            response.put("mensaje", "Error al realizar la consulta a la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if(datosEscolares == null){
            response.put("mensaje", "el cliente ID ".concat(id.toString().concat(" no existe en la base de datos")));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<DatosEscolares>(datosEscolares, HttpStatus.OK);
    }

    @GetMapping
    public List<DatosEscolares> listarDatosEscolares() {
        return datosEscolaresService.getAllDatosEscolares();
    }


    @GetMapping("/todos")
    public ResponseEntity<List<DatosEscolares>> obtenerTodosLosDatos() {
        List<DatosEscolares> datos = datosEscolaresService.getAllDatosEscolares();
        return ResponseEntity.ok(datos);
    }

    @DeleteMapping("/{id}")
    public void eliminarDatosEscolares(@PathVariable Long id) {
        datosEscolaresService.deleteDatosEscolares(id);
    }

    @DeleteMapping("/recuperacion/{id}")
    public void activatedDatosEscolares(@PathVariable Long id){
        datosEscolaresService.activatedDatosEscolares(id);
    }

    @DeleteMapping("/eliminar/{id}")
    public void eliminarDatosEscolaresDefinitivamente(@PathVariable Long id){
        datosEscolaresService.eliminarDatosEscolares(id);
    }
}

