package com.humans.resource.service;

import com.humans.resource.entity.DatosFTD;
import com.humans.resource.repository.DatosFTDRepository;
import com.humans.resource.repository.DatosFTDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class DatosFTDServiceImpl implements DatosFTDService {

    @Autowired
    private DatosFTDRepository datosFTDRepository;

    @Override
    public List<DatosFTD> getAllDatosFTD() {
        return datosFTDRepository.findAll();
    }

    @Override
    public DatosFTD getDatosFTDById(Long id) {
        return datosFTDRepository.findById(id).orElse(null);
    }

    @Override
    public DatosFTD createDatosFTD(DatosFTD datosFTD) {
        return datosFTDRepository.save(datosFTD);
    }

    @Override
    public DatosFTD updateDatosFTD(Long id, DatosFTD datosFTD) {
        DatosFTD existingDatosFTD = datosFTDRepository.findById(id).orElse(null);
        if (existingDatosFTD != null) {
            // Update the fields you want to update here
            existingDatosFTD.setNombreProyecto(datosFTD.getNombreProyecto());
            existingDatosFTD.setAvanceProyecto(datosFTD.getAvanceProyecto());
            // Update other fields similarly

            return datosFTDRepository.save(existingDatosFTD);
        }
        return null;
    }

    @Override
    public void deleteDatosFTD(Long id) {
        datosFTDRepository.deleteById(id);
    }
}
