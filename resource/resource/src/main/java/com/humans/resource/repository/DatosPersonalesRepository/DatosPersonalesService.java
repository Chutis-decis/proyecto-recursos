package com.humans.resource.repository.DatosPersonalesRepository;

import com.humans.resource.entity.DatosFTD.Beca;

import java.util.List;

public interface DatosPersonalesService {
    List<Beca.DatosPersonales> getAllDatosPersonales();
    Beca.DatosPersonales getDatosPersonalesById(Long id);
    Beca.DatosPersonales createDatosPersonales(Beca.DatosPersonales datosPersonales);
    Beca.DatosPersonales updateDatosPersonales(Long id, Beca.DatosPersonales datosPersonales);
    void deleteDatosPersonales(Long id);
     void activateDatosPersonales(Long id);
    Beca.DatosPersonales actualizarDatosPersonales(Long id, Beca.DatosPersonales datosNuevos);
}
