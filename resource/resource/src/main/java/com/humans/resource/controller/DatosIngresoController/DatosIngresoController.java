package com.humans.resource.controller.DatosIngresoController;

import com.humans.resource.entity.DatosIngreso.DatosIngreso;
import com.humans.resource.repository.DatosIngresooRepository.DatosIngresoService;
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
@RequestMapping("/datos-ingreso")
public class DatosIngresoController {

    private final DatosIngresoService datosIngresoService;

    @Autowired
    public DatosIngresoController(DatosIngresoService datosIngresoService) {
        this.datosIngresoService = datosIngresoService;
    }

    @PostMapping
    public ResponseEntity<?> createDatosIngreso(@RequestBody DatosIngreso datosIngreso) {
        DatosIngreso newDatos = null;
        Map<String, Object>response = new HashMap<>();

        try {
            newDatos =datosIngresoService.saveDatosIngreso(datosIngreso);
        }catch (DataAccessException e){
            response.put("mensaje", "Error al realizar el insert en la bases de datos");
            response.put("error",e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        response.put("mensaje", "El cliente ha sido creado con exito!!!");
        response.put("cliente", newDatos);

        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getDatosIngresoById(@PathVariable Long id) {
        DatosIngreso datosIngreso =null;
        Map<String,Object>response = new HashMap<>();

        try{
            datosIngreso =datosIngresoService.getDatosIngresoById(id);
        }catch (DataAccessException e){
            response.put("mensaje", "Error al realizar la consulta a la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if(datosIngreso == null){
            response.put("message", "Los datos de Ingreso con el ID: ".concat(id.toString().concat("no existe en la  base de datos")));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }
        return  new ResponseEntity<DatosIngreso>(datosIngreso, HttpStatus.OK);
    }

    @GetMapping
    public List<DatosIngreso> getAllDatosIngreso() {
        return datosIngresoService.getAllDatosIngreso();
    }

    @PutMapping("/{id}")
    public DatosIngreso updateDatosIngreso(@PathVariable Long id, @RequestBody DatosIngreso datosIngreso) {
        // Ensure that the ID in the request path matches the ID in the request body
        if (!id.equals(datosIngreso.getId())) {
            throw new IllegalArgumentException("ID in the request path does not match the entity ID");
        }
        return datosIngresoService.saveDatosIngreso(datosIngreso);
    }

    @DeleteMapping("/{id}")
    public void deleteDatosIngreso(@PathVariable Long id) {
        datosIngresoService.deleteDatosIngreso(id);
    }

    @DeleteMapping("/recuperacion/{id}")
    public void activateIngreso(@PathVariable Long id){
        datosIngresoService.activatedIngreso(id);
    }

    @DeleteMapping("/eliminar/{id}")
    public void eliminarDatosIngreso(@PathVariable Long id){
        datosIngresoService.eliminarDatosIngreso(id);
    }
}
