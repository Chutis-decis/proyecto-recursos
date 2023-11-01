package com.humans.resource.service;

import com.humans.resource.entity.DatosEscolares;
import com.humans.resource.repository.DatosEscolaresRepository;
import com.humans.resource.repository.DatosEscolaresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class DatosEscolaresServiceImpl implements DatosEscolaresService {

    private final DatosEscolaresRepository datosEscolaresRepository;

    @Autowired
    public DatosEscolaresServiceImpl(DatosEscolaresRepository datosEscolaresRepository) {
        this.datosEscolaresRepository = datosEscolaresRepository;
    }

    @Override
    public DatosEscolares createDatosEscolares(DatosEscolares datosEscolares) {
        return datosEscolaresRepository.save(datosEscolares);
    }

    @Override
    public DatosEscolares updateDatosEscolares(Long id, DatosEscolares datosEscolares) {
        datosEscolares.setId(id);
        return datosEscolaresRepository.save(datosEscolares);
    }

    @Override
    public List<DatosEscolares> getAllDatosEscolares() {
        return datosEscolaresRepository.findAll();
    }

    @Override
    public DatosEscolares getDatosEscolaresById(Long id) {
        return datosEscolaresRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteDatosEscolares(Long id) {
        datosEscolaresRepository.deleteById(id);
    }
}

