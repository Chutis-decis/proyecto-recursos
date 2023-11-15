package com.humans.resource.repository;

import com.humans.resource.entity.PlanEducativo;

import java.util.List;

public interface PlanEducativoService {
    PlanEducativo agregarPlanEducativo(PlanEducativo planEducativo);
    PlanEducativo modificarPlanEducativo(Long planEducativoId, PlanEducativo planEducativo);
    void darDeBajaPlanEducativo(Long planEducativoId);
    PlanEducativo buscarPlanEducativoPorId(Long planEducativoId);

    List<PlanEducativo> getPlanEducativo();
}