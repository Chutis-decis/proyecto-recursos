package com.humans.resource.service;

import com.humans.resource.entity.PlanEducativo;
import com.humans.resource.repository.PlanEducativoRepository;
import com.humans.resource.repository.PlanEducativoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanEducativoServiceImpl implements PlanEducativoService {
    @Autowired
    private PlanEducativoRepository planEducativoRepository;

    @Override
    public PlanEducativo agregarPlanEducativo(PlanEducativo planEducativo) {
        return planEducativoRepository.save(planEducativo);
    }

    @Override
    public PlanEducativo modificarPlanEducativo(Long planEducativoId, PlanEducativo planEducativo) {
        // Verifica si el plan educativo existe
        PlanEducativo existingPlanEducativo = planEducativoRepository.findById(planEducativoId).orElse(null);
        if (existingPlanEducativo != null) {
            // Actualiza los campos del plan educativo
            existingPlanEducativo.setNombre(planEducativo.getNombre());
            return planEducativoRepository.save(existingPlanEducativo);
        }
        return null; // Devuelve null si el plan educativo no se encuentra
    }

    @Override
    public void darDeBajaPlanEducativo(Long planEducativoId) {
        // Elimina el plan educativo si existe
        planEducativoRepository.deleteById(planEducativoId);
    }

    @Override
    public PlanEducativo buscarPlanEducativoPorId(Long planEducativoId) {
        // Busca un plan educativo por su ID
        return planEducativoRepository.findById(planEducativoId).orElse(null);
    }

    @Override
    public List<PlanEducativo> getPlanEducativo(){
        return planEducativoRepository.findAll();
    }
}

