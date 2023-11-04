package com.humans.resource.controller;

import com.humans.resource.entity.DatosFTD;
import com.humans.resource.service.DatosFTDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/datosftd")
public class DatosFTDController {

    private DatosFTDService datosFTDService;

    @Autowired
    public DatosFTDController(DatosFTDService datosFTDService) {
        this.datosFTDService = datosFTDService;
    }

    @PostMapping
    public DatosFTD createDatosFTD(@RequestBody DatosFTD datosFTD) {
        return datosFTDService.saveDatosFTD(datosFTD);
    }

    @GetMapping("/{id}")
    public DatosFTD getDatosFTDById(@PathVariable Long id) {
        return datosFTDService.getDatosFTDById(id);
    }

    @GetMapping
    public List<DatosFTD> getAllDatosFTD() {
        return datosFTDService.getAllDatosFTD();
    }

    @PutMapping("/{id}")
    public DatosFTD updateDatosFTD(@PathVariable Long id, @RequestBody DatosFTD datosFTD) {
        if (!id.equals(datosFTD.getId())) {
            throw new IllegalArgumentException("ID in path does not match the entity's ID");
        }
        return datosFTDService.saveDatosFTD(datosFTD);
    }

    @DeleteMapping("/{id}")
    public void deleteDatosFTD(@PathVariable Long id) {
        DatosFTD datosFTD = datosFTDService.getDatosFTDById(id);
        if (datosFTD != null) {
            datosFTD.setActivo(false);
            datosFTDService.saveDatosFTD(datosFTD);
        }
    }

    }

