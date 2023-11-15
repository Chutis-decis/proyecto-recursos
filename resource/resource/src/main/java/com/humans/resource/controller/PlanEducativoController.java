package com.humans.resource.controller;

import com.humans.resource.entity.DatosEscolares;
import com.humans.resource.entity.PlanEducativo;
import com.humans.resource.repository.PlanEducativoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/plan-educativo")
@CrossOrigin (origins = "http://localhost:4200")
public class PlanEducativoController {

    //********************************* PLAN EDUCATIVO ******************************
    @Autowired
    private PlanEducativoService planEducativoService;

    @GetMapping("")
    public List<PlanEducativo> getAllPlanEducativo(){return planEducativoService.getPlanEducativo();}

    @PostMapping("")
    public PlanEducativo agregarPlanEducativo(@RequestBody PlanEducativo planEducativo) {
        return planEducativoService.agregarPlanEducativo(planEducativo);
    }

    @DeleteMapping("/{id}")
    public void deletePlanEducativo(@PathVariable Long id){
        planEducativoService.darDeBajaPlanEducativo(id);
    }

    @PutMapping("/{id}")
    public PlanEducativo actualizarPlanEducativo(@PathVariable Long id, @RequestBody PlanEducativo planEducativo) {
        return planEducativoService.modificarPlanEducativo(id, planEducativo);
    }
}
