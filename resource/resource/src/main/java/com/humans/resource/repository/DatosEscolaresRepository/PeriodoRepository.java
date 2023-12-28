package com.humans.resource.repository.DatosEscolaresRepository;

import com.humans.resource.entity.DatosEscolares.Periodo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PeriodoRepository extends JpaRepository <Periodo, Long> {

    List<Periodo> findByActivoTrue();

    Optional<Periodo> findByIdAndActivoTrue(Long id);

    boolean existsByIdAndActivoTrue(Long id);

    Optional<Periodo> findByIdAndActivoFalse(Long id);

    boolean existsByIdAndActivoFalse(Long id);

}
