package com.humans.resource.service.DatosFTDService;



import com.humans.resource.entity.DatosFTD.DatosFTD;
import com.humans.resource.repository.DatosFTDRepository.DatosFTDRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class DatosFTDService {

    private final DatosFTDRepository datosFTDRepository;

    @Autowired
    public DatosFTDService(DatosFTDRepository datosFTDRepository) {
        this.datosFTDRepository = datosFTDRepository;
    }

    // Basic CRUD operations

    public DatosFTD saveDatosFTD(DatosFTD datosFTD) {
        return datosFTDRepository.save(datosFTD);
    }

    public Optional<DatosFTD> getDatosFTDById(Long id) {
        return datosFTDRepository.findById(id);
    }

    public List<DatosFTD> getAllDatosFTD() {
        return datosFTDRepository.findAll();
    }

    public void deleteDatosFTD(Long id) {
        datosFTDRepository.deleteById(id);
    }

    // Custom business logic methods if needed

    public List<DatosFTD> findByNombreProyecto(String nombreProyecto) {
        return datosFTDRepository.findByNombreProyecto(nombreProyecto);
    }

    // Add other methods as needed
}
