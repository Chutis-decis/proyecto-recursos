package com.humans.resource.controller.DatosEscolaresController;

import com.humans.resource.entity.DatosEscolares.ModalidadEscolar;
import com.humans.resource.entity.DatosEscolares.PlanEducativo;
import com.humans.resource.service.DatosEscolaresService.ModalidadEscolarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/modalidad-escolar")
@CrossOrigin(origins = "http://localhost:4200")
public class ModalidadEscolarController {
    @Autowired
    private ModalidadEscolarService modalidadEscolarService;

    @GetMapping
    public List<ModalidadEscolar> getAllModalidadEscolar(){return modalidadEscolarService.getModalidadEscolar();}

    @GetMapping ("/{id}")
    public ModalidadEscolar agregarById(@PathVariable Long id){
        return modalidadEscolarService.getModalidadEscolarById(id);
    }
    @PostMapping
    public ModalidadEscolar agregarModalidadEscolar(@RequestBody ModalidadEscolar modalidadEscolar) {
        return modalidadEscolarService.agregarModalidadEscolar(modalidadEscolar);
    }

    @DeleteMapping("/{id}")
    public void deleteModalidadEscolar(@PathVariable Long id){
        modalidadEscolarService.darDeBajaModalidadEscolar(id);
    }

    @PutMapping("/{id}")
    public ModalidadEscolar actualizarModalidadEscolar(@PathVariable Long id, @RequestBody ModalidadEscolar modalidadEscolar) {
        return modalidadEscolarService.modificarModalidadEscolar(id, modalidadEscolar);
    }
}
