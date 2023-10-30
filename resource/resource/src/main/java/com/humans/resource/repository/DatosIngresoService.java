package com.humans.resource.repository;

import com.humans.resource.entity.DatosIngreso;

import java.util.List;

public interface DatosIngresoService {
    DatosIngreso saveDatosIngreso(DatosIngreso datosIngreso);
    DatosIngreso getDatosIngresoById(Long id);
    List<DatosIngreso> getAllDatosIngreso();

    void deleteDatosIngreso(Long id);
}
