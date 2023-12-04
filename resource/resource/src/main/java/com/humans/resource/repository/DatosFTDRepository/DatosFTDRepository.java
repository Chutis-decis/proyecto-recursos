package com.humans.resource.repository.DatosFTDRepository;

import com.humans.resource.entity.DatosFTD.DatosFTD;
import com.humans.resource.entity.DatosIngreso.DatosIngreso;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DatosFTDRepository extends JpaRepository<DatosFTD, Long> {
    List<DatosFTD> findByActivo(boolean activo);

    List<DatosIngreso> findByActivoTrue();

    List<DatosFTD> findByNombreProyecto(String nombreProyecto);
}
