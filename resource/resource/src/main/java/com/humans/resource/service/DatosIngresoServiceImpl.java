package com.humans.resource.service;

import com.humans.resource.entity.DatosIngreso;
import com.humans.resource.repository.DatosIngresoRepository;
import com.humans.resource.repository.DatosIngresoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DatosIngresoServiceImpl implements DatosIngresoService {

    private final DatosIngresoRepository datosIngresoRepository;

    @Autowired
    public DatosIngresoServiceImpl(DatosIngresoRepository datosIngresoRepository) {
        this.datosIngresoRepository = datosIngresoRepository;
    }

    @Override
    public DatosIngreso saveDatosIngreso(DatosIngreso datosIngreso) {
        return datosIngresoRepository.save(datosIngreso);
    }
    @Override
    public DatosIngreso getDatosIngresoById(Long id) {
        return datosIngresoRepository.findById(id).orElse(null);
    }

    public List<DatosIngreso> getDatosIngresoByModalidadId(Long modalidadId) {
        return datosIngresoRepository.findByModalidadId(modalidadId);
    }

    @Override
    public List<DatosIngreso> getAllDatosIngreso() {
        return datosIngresoRepository.findAll();
    }

    @Override
    public void deleteDatosIngreso(Long id) {
        datosIngresoRepository.deleteById(id);
    }

}
