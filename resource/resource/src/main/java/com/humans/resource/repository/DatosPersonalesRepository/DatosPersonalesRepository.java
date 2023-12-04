package com.humans.resource.repository.DatosPersonalesRepository;

import com.humans.resource.entity.DatosFTD.Beca;
import com.humans.resource.entity.DatosPersonales.DatosPersonales;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DatosPersonalesRepository extends JpaRepository<DatosPersonales, Long> {


}
