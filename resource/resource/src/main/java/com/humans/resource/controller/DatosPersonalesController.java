package com.humans.resource.controller;

import com.humans.resource.entity.DatosPersonales;
import com.humans.resource.repository.DatosPersonalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
    @RequestMapping("/datos-personales")
    @CrossOrigin(origins = "http://localhost:4200")
    public class DatosPersonalesController {

        private final DatosPersonalesService datosPersonalesService;

        @Autowired
        public DatosPersonalesController(DatosPersonalesService datosPersonalesService) {
            this.datosPersonalesService = datosPersonalesService;
        }

        @PostMapping
        public DatosPersonales crearDatosPersonales(@RequestBody DatosPersonales datosPersonales) {
            return datosPersonalesService.createDatosPersonales(datosPersonales);
        }

    // Endpoint para actualizar todos los datos de una instancia de DatosPersonales
    @PutMapping("/{id}")
    public ResponseEntity<DatosPersonales> actualizarDatosPersonales(@PathVariable Long id, @RequestBody DatosPersonales datosNuevos) {
        DatosPersonales datosActualizados = datosPersonalesService.actualizarDatosPersonales(id, datosNuevos);
        if (datosActualizados != null) {
            return new ResponseEntity<>(datosActualizados, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

        @GetMapping("/{id}")
        public DatosPersonales obtenerDatosPersonalesPorId(@PathVariable Long id) {
            return datosPersonalesService.getDatosPersonalesById(id);
        }

        @GetMapping
        public List<DatosPersonales> listarDatosPersonales() {
            return datosPersonalesService.getAllDatosPersonales();
        }



        @DeleteMapping("/{id}")
        public void eliminarDatosPersonales(@PathVariable Long id) {
            datosPersonalesService.deleteDatosPersonales(id);
        }
    }

