package com.humans.resource.service.DatosEscolaresService;

import com.humans.resource.entity.DatosEscolares.PlanEducativo;
import com.humans.resource.error.ResourceNotFoundException;
import com.humans.resource.repository.DatosEscolaresRepository.PlanEducativoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanEducativoService {

    @Autowired
    private PlanEducativoRepository planEducativoRepository;

    public PlanEducativo addPlan(PlanEducativo planEducativo) {
        return planEducativoRepository.save(planEducativo);
    }

    public PlanEducativo updateplan(Long planeducativoId, PlanEducativo planEducativo) {
        PlanEducativo existingplan = planEducativoRepository.findById(planeducativoId).orElse(null);

        if (existingplan == null) {
            return null; // Manejar el caso en que no se encuentra la universidad
        }

        existingplan.setNombre(planEducativo.getNombre());

        return planEducativoRepository.save(existingplan);
    }

    public List<PlanEducativo> getPlan (){
        return planEducativoRepository.findAll();
    }

    public PlanEducativo getPlan(Long id){
        return planEducativoRepository.findById(id).orElse(null);
    }


    public void deletePlanEducativo (Long id) {
        PlanEducativo planEducativo = planEducativoRepository.findByIdAndActivoTrue(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        planEducativo.setActivo(false);  // Marcar como inactivo en lugar de eliminar físicamente
        planEducativoRepository.save(planEducativo);
    }

    public void activatePlan(Long id) {
        PlanEducativo planEducativo = planEducativoRepository.findByIdAndActivoFalse(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        planEducativo.setActivo(true);  // Marcar como inactivo en lugar de eliminar físicamente
        planEducativoRepository.save(planEducativo);
    }

    public void eliminarPlan(Long id) {
        planEducativoRepository.deleteById(id);
    }
}
