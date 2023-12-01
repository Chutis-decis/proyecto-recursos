package com.humans.resource.service.DatosFTDService;

import com.humans.resource.entity.DatosFTD.Grupo;
import com.humans.resource.repository.DatosFTDRepository.GrupoRepository;
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

    public Grupo getGrupoById(Long id) {
        return grupoRepository.findById(id).orElse(null);
    }

    public Grupo saveGrupo(Grupo grupo) {
        return grupoRepository.save(grupo);
    }

    public void deleteGrupo(Long id) {
        Grupo grupo = grupoRepository.findById(id).orElse(null);
        if (grupo != null) {
            grupo.setActivo(false);
            grupoRepository.save(grupo);
        }
    }
}
