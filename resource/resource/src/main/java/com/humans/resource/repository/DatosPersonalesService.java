package com.humans.resource.repository;

import com.humans.resource.entity.DatosPersonales;

import java.util.List;

public interface DatosPersonalesService {
    List<DatosPersonales> getAllDatosPersonales();
    DatosPersonales getDatosPersonalesById(Long id);
    DatosPersonales createDatosPersonales(DatosPersonales datosPersonales);
    DatosPersonales updateDatosPersonales(Long id, DatosPersonales datosPersonales);
    void deleteDatosPersonales(Long id);

    DatosPersonales actualizarDatosPersonales(Long id, DatosPersonales datosNuevos);
}
