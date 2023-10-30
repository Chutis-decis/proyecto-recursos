package com.humans.resource.repository;

import com.humans.resource.entity.DatosFTD;

import java.util.List;

public interface DatosFTDService {
    List<DatosFTD> getAllDatosFTD();
    DatosFTD getDatosFTDById(Long id);
    DatosFTD createDatosFTD(DatosFTD datosFTD);
    DatosFTD updateDatosFTD(Long id, DatosFTD datosFTD);
    void deleteDatosFTD(Long id);
}
