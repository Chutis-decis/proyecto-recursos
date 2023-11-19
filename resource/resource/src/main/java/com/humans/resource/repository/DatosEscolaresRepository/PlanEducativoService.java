package com.humans.resource.repository.DatosEscolaresRepository;

import com.humans.resource.entity.DatosEscolares.PlanEducativo;

import java.util.List;

public interface PlanEducativoService {
    PlanEducativo agregarPlanEducativo(PlanEducativo planEducativo);
    PlanEducativo modificarPlanEducativo(Long planEducativoId, PlanEducativo planEducativo);
    void darDeBajaPlanEducativo(Long planEducativoId);
    PlanEducativo buscarPlanEducativoPorId(Long planEducativoId);

    List<PlanEducativo> getPlanEducativo();
}