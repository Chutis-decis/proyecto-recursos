package com.humans.resource.repository.DatosEscolaresRepository;

import com.humans.resource.entity.DatosEscolares.Universidad;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UniversidadRepository extends JpaRepository<Universidad, Long> {

    List<Universidad> findByActivoTrue();

    Optional<Universidad> findByIdAndActivoTrue(Long id);

    boolean existsByIdAndActivoTrue(Long id);

    Optional<Universidad> findByIdAndActivoFalse(Long id);

    boolean existsByIdAndActivoFalse(Long id);
}
