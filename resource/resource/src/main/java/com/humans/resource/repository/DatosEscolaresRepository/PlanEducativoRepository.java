package com.humans.resource.repository.DatosEscolaresRepository;

import com.humans.resource.entity.DatosEscolares.Periodo;
import com.humans.resource.entity.DatosEscolares.PlanEducativo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PlanEducativoRepository extends JpaRepository<PlanEducativo, Long> {
    Optional<PlanEducativo> findByIdAndActivoFalse(Long id);

    boolean existsByIdAndActivoFalse(Long id);
    Optional<PlanEducativo> findByIdAndActivoTrue(Long id);

    boolean existsByIdAndActivoTrue(Long id);

}
