package com.humans.resource.service;


import com.humans.resource.entity.DatosFTD;
import com.humans.resource.repository.DatosFTDRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DatosFTDService {

    private DatosFTDRepository datosFTDRepository;

    @Autowired
    public DatosFTDService(DatosFTDRepository datosFTDRepository) {
        this.datosFTDRepository = datosFTDRepository;
    }

    public DatosFTD saveDatosFTD(DatosFTD datosFTD) {
        return datosFTDRepository.save(datosFTD);
    }

    // En el servicio
    public List<DatosFTD> getAllActiveDatosFTD() {
        return datosFTDRepository.findByActivo(true);
    }

    public DatosFTD getDatosFTDById(Long id) {
        return datosFTDRepository.findById(id).orElse(null);
    }

    public List<DatosFTD> getAllDatosFTD() {
        return datosFTDRepository.findAll();
    }

    public void deleteDatosFTD(Long id) {
        datosFTDRepository.deleteById(id);
    }
}
