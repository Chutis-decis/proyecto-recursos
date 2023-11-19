package com.humans.resource.controller.DatosEscolaresController;

import com.humans.resource.entity.DatosEscolares.DatosEscolares;
import com.humans.resource.repository.DatosEscolaresRepository.DatosEscolaresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


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
    public DatosEscolares obtenerDatosEscolaresPorId(@PathVariable Long id) {
        return datosEscolaresService.getDatosEscolaresById(id);
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
}

