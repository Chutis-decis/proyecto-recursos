package com.humans.resource.repository.DatosEscolaresRepository;

import com.humans.resource.entity.DatosEscolares.ModalidadEscolar;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ModalidadEscolarRepository extends JpaRepository<ModalidadEscolar, Long> {

    List<ModalidadEscolar> findByActivoTrue();

    Optional<ModalidadEscolar> findByIdAndActivoTrue(Long id);

    boolean existsByIdAndActivoTrue(Long id);

    Optional<ModalidadEscolar> findByIdAndActivoFalse(Long id);

    boolean existsByIdAndActivoFalse(Long id);
}
