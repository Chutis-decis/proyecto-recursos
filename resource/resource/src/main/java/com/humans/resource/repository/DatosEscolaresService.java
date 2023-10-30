package com.humans.resource.repository;

import com.humans.resource.entity.DatosEscolares;

import java.util.List;

public interface DatosEscolaresService {
    DatosEscolares createDatosEscolares(DatosEscolares datosEscolares);
    DatosEscolares updateDatosEscolares(Long id, DatosEscolares datosEscolares);
    List<DatosEscolares> getAllDatosEscolares();
    DatosEscolares getDatosEscolaresById(Long id);
    void deleteDatosEscolares(Long id);
}
