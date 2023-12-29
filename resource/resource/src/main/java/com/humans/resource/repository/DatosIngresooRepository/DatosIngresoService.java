package com.humans.resource.repository.DatosIngresooRepository;

import com.humans.resource.entity.DatosIngreso.DatosIngreso;

import java.util.List;
public interface DatosIngresoService {
    DatosIngreso saveDatosIngreso(DatosIngreso datosIngreso);
    DatosIngreso getDatosIngresoById(Long id);
    List<DatosIngreso> getAllDatosIngreso();
    void deleteDatosIngreso(Long id);

    void activatedIngreso(Long id);

    void eliminarDatosIngreso(Long id);

    List<DatosIngreso>getDatosIngresoByModalidadId(Long modalidadId);
}
