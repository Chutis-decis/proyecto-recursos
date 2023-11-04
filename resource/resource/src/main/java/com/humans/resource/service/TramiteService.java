package com.humans.resource.service;

import com.humans.resource.entity.Tramite;
import com.humans.resource.error.ResourceNotFoundException;
import com.humans.resource.repository.TramiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TramiteService {

    private final TramiteRepository tramiteRepository;

    @Autowired
    public TramiteService(TramiteRepository tramiteRepository) {
        this.tramiteRepository = tramiteRepository;
    }

    // Service methods for Tramite entity

    public List<Tramite> getAllTramites() {
        return tramiteRepository.findAll();
    }

    public Optional<Tramite> getTramiteById(Long id) {
        return tramiteRepository.findById(id);
    }

    public Tramite createTramite(Tramite tramite) {
        return tramiteRepository.save(tramite);
    }
    public Tramite updateTramite(Long id, Tramite tramite) {
        if (tramiteRepository.existsById(id)) {
            tramite.setId(id);
            return tramiteRepository.save(tramite);
        } else {
            throw new ResourceNotFoundException("Tramite with ID " + id + " not found");
        }
    }
    public void deleteTramite(Long id) {
        tramiteRepository.deleteById(id);
    }
}

