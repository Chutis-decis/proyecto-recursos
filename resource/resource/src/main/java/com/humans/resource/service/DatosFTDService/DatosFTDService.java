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

    public List<DatosFTD> getAllDatosFTD() {
        return datosFTDRepository.findAllByActivoTrue();
    }

    public Optional<DatosFTD> getDatosFTDById(Long id) {
        return datosFTDRepository.findByIdAndActivoTrue(id);
    }

    public DatosFTD saveDatosFTD(DatosFTD datosFTD) {
        return datosFTDRepository.save(datosFTD);
    }

    public void deleteDatosFTD(Long id) {
        datosFTDRepository.findById(id).ifPresent(datosFTD -> {
            datosFTD.setActivo(false);
            datosFTDRepository.save(datosFTD);
        });
    }

    public void activatedDatosFTD(Long id) {
        datosFTDRepository.findById(id).ifPresent(datosFTD -> {
            datosFTD.setActivo(true);
            datosFTDRepository.save(datosFTD);
        });
    }

    public void delete(Long id){
        datosFTDRepository.deleteById(id);
    }
}
