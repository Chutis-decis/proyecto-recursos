package com.humans.resource.repository.DatosEscolaresRepository;

import com.humans.resource.entity.DatosEscolares.Periodo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PeriodoRepository extends JpaRepository <Periodo, Long> {
}
