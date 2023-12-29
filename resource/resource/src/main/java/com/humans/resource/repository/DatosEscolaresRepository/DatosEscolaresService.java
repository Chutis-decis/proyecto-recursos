package com.humans.resource.repository.DatosEscolaresRepository;

import com.humans.resource.entity.DatosEscolares.DatosEscolares;

import java.util.List;

public interface DatosEscolaresService {
    DatosEscolares createDatosEscolares(DatosEscolares datosEscolares);
    DatosEscolares updateDatosEscolares(Long id, DatosEscolares datosEscolares);
    List<DatosEscolares> getAllDatosEscolares();
    DatosEscolares getDatosEscolaresById(Long id);
    void deleteDatosEscolares(Long id);

    void activatedDatosEscolares(Long id);

    void eliminarDatosEscolares(Long id);
}
