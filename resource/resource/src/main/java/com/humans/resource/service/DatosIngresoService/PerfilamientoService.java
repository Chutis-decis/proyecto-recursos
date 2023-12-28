package com.humans.resource.service.DatosIngresoService;

import com.humans.resource.entity.DatosIngreso.Perfilamiento;
import com.humans.resource.error.ResourceNotFoundException;
import com.humans.resource.repository.DatosIngresooRepository.PerfilamientoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PerfilamientoService {

    private final PerfilamientoRepository perfilamientoRepository;

    @Autowired
    public PerfilamientoService(PerfilamientoRepository perfilamientoRepository) {
        this.perfilamientoRepository = perfilamientoRepository;
    }

    public List<Perfilamiento> listarTodos() {
        return perfilamientoRepository.findAll();
    }

    public Perfilamiento guardarPerfilamiento(Perfilamiento perfilamiento) {
        return perfilamientoRepository.save(perfilamiento);
    }

    public void deletePerfilamiento (Long id) {
        Perfilamiento perfilamiento = perfilamientoRepository.findByIdAndActivoTrue(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        perfilamiento.setActivo(false);  // Marcar como inactivo en lugar de eliminar físicamente
        perfilamientoRepository.save(perfilamiento);
    }

    public void activatePerfilamiento(Long id) {
        Perfilamiento perfilamiento = perfilamientoRepository.findByIdAndActivoFalse(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        perfilamiento.setActivo(true);  // Marcar como inactivo en lugar de eliminar físicamente
        perfilamientoRepository.save(perfilamiento);
    }

    public void eliminarPerfilamiento(Long id) {
        perfilamientoRepository.deleteById(id);
    }

    public Perfilamiento buscarPorId(Long id) {
        return perfilamientoRepository.findById(id).orElse(null);
    }
}

