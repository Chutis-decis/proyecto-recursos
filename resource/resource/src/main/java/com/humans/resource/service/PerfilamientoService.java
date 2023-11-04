package com.humans.resource.service;

import com.humans.resource.entity.Perfilamiento;
import com.humans.resource.repository.PerfilamientoRepository;
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

    public void eliminarPerfilamiento(Long id) {
        perfilamientoRepository.deleteById(id);
    }

    public Perfilamiento buscarPorId(Long id) {
        return perfilamientoRepository.findById(id).orElse(null);
    }
}
