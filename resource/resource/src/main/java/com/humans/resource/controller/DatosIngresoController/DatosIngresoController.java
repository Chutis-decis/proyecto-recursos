package com.humans.resource.controller.DatosIngresoController;

import com.humans.resource.entity.DatosIngreso.DatosIngreso;
import com.humans.resource.repository.DatosIngresooRepository.DatosIngresoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

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
    public DatosIngreso createDatosIngreso(@RequestBody DatosIngreso datosIngreso) {
        return datosIngresoService.saveDatosIngreso(datosIngreso);
    }

    @GetMapping("/{id}")
    public DatosIngreso getDatosIngresoById(@PathVariable Long id) {
        return datosIngresoService.getDatosIngresoById(id);
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
}
