package com.humans.resource.service.DatosFTDService;

import com.humans.resource.entity.DatosFTD.Grupo;
import com.humans.resource.error.ResourceNotFoundException;
import com.humans.resource.repository.DatosFTDRepository.GrupoRepository;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class GrupoService {

    private final GrupoRepository grupoRepository;

    @Autowired
    public GrupoService(GrupoRepository grupoRepository) {
        this.grupoRepository = grupoRepository;
    }

    public List<Grupo> getAllGrupos() {
        return grupoRepository.findAll();
    }

    public Optional<Grupo> getGrupoById(Long id) {
        return grupoRepository.findById(id);
    }

    public Grupo saveGrupo(Grupo grupo) {
        return grupoRepository.save(grupo);
    }

    public void deleteGrupo(Long id) {
        Grupo grupo = grupoRepository.findByIdAndActivoTrue(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        grupo.setActivo(false);  // Marcar como inactivo en lugar de eliminar físicamente
        grupoRepository.save(grupo);
    }

    public void activateGrupo(Long id) {
        Grupo grupo = grupoRepository.findByIdAndActivoFalse(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        grupo.setActivo(true);  // Marcar como inactivo en lugar de eliminar físicamente
        grupoRepository.save(grupo);
    }

    public void eliminarGrupo(Long id) {
        Grupo grupo = grupoRepository.findByIdAndActivoTrue(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        grupoRepository.delete(grupo);
    }
}
