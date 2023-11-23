package com.humans.resource.service.DatosFTDService;


import com.humans.resource.entity.DatosFTD.DatosFTD;
import com.humans.resource.repository.DatosFTDRepository.DatosFTDRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DatosFTDService implements com.humans.resource.repository.DatosFTDRepository.DatosFTDService {

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


    @Override
    public void activateDatosFTD(Long id) {
        DatosFTD datosFTD = datosFTDRepository.findById(id).orElse(null);
        if (datosFTD != null){
            datosFTD.setActivo(true);
            datosFTDRepository.save(datosFTD);
        }
    }
}
