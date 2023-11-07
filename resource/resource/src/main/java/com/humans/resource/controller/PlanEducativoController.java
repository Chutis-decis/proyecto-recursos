package com.humans.resource.controller;

import com.humans.resource.entity.PlanEducativo;
import com.humans.resource.repository.PlanEducativoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/plan-educativo")
public class PlanEducativoController {
    @Autowired
    private PlanEducativoService planEducativoService;

    @PostMapping
    public PlanEducativo agregarPlanEducativo(@RequestBody PlanEducativo planEducativo) {
        return planEducativoService.agregarPlanEducativo(planEducativo);
    }

    @PutMapping("/{planEducativoId}")
    public PlanEducativo modificarPlanEducativo(@PathVariable Long planEducativoId, @RequestBody PlanEducativo planEducativo) {
        return planEducativoService.modificarPlanEducativo(planEducativoId, planEducativo);
    }

    @DeleteMapping("/{planEducativoId}")
    public void darDeBajaPlanEducativo(@PathVariable Long planEducativoId) {
        planEducativoService.darDeBajaPlanEducativo(planEducativoId);
    }

    @GetMapping("/{planEducativoId}")
    public PlanEducativo buscarPlanEducativoPorId(@PathVariable Long planEducativoId) {
        return planEducativoService.buscarPlanEducativoPorId(planEducativoId);
    }
}
