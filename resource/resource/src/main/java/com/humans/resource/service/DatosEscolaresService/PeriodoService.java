package com.humans.resource.service.DatosEscolaresService;

import com.humans.resource.entity.DatosEscolares.Periodo;
import com.humans.resource.error.ResourceNotFoundException;
import com.humans.resource.repository.DatosEscolaresRepository.PeriodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PeriodoService {
    @Autowired
    PeriodoRepository periodoRepository;

    public List<Periodo> getPeriodo(){ return periodoRepository.findAll();}

    public Periodo getPeriodoById (Long id){ return periodoRepository.findById(id).orElse(null);}

    public Periodo addPeriodo(Periodo periodo){
        return periodoRepository.save(periodo);
    }


    public Periodo updatePeriodo(Long id, Periodo periodo) {
        Periodo existingPeriodo = periodoRepository.findById(id).orElse(null);

        if (existingPeriodo == null) {
            return null; // Manejar el caso en que no se encuentra la universidad
        }

        // Actualiza los campos de la universidad existente con los valores proporcionados
        existingPeriodo.setNombre(periodo.getNombre());


        // Actualiza otros campos según sea necesario

        return periodoRepository.save(existingPeriodo);
    }



    public void deletePeriodo (Long id) {
        Periodo periodo = periodoRepository.findByIdAndActivoTrue(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        periodo.setActivo(false);  // Marcar como inactivo en lugar de eliminar físicamente
        periodoRepository.save(periodo);
    }

    public void activatePeriodo(Long id) {
        Periodo periodo = periodoRepository.findByIdAndActivoFalse(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        periodo.setActivo(true);  // Marcar como inactivo en lugar de eliminar físicamente
        periodoRepository.save(periodo);
    }

    public void eliminarPeriodo(Long id) {
        periodoRepository.deleteById(id);
    }
}