package com.humans.resource.controller;


import com.humans.resource.entity.ModalidadEscolar;
import com.humans.resource.service.ModalidadEscolarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/modalidades-escolares")
public class ModalidadEscolarController {

    @Autowired
    private ModalidadEscolarService modalidadEscolarService;

    @PostMapping
    public ModalidadEscolar agregarModalidadEscolar(@RequestBody ModalidadEscolar modalidadEscolar) {
        return modalidadEscolarService.agregarModalidadEscolar(modalidadEscolar);
    }

    @PutMapping("/{id}")
    public ModalidadEscolar modificarModalidadEscolar(@PathVariable Long id, @RequestBody ModalidadEscolar modalidadEscolar) {
        return modalidadEscolarService.modificarModalidadEscolar(id, modalidadEscolar);
    }

    @DeleteMapping("/{id}")
    public void darDeBajaModalidadEscolar(@PathVariable Long id) {
        modalidadEscolarService.darDeBajaModalidadEscolar(id);
    }
}
