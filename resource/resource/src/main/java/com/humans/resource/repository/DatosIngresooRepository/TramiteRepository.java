package com.humans.resource.repository.DatosIngresooRepository;

import com.humans.resource.entity.DatosIngreso.Tramite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TramiteRepository extends JpaRepository<Tramite,Long> {

    List<Tramite> findByActivoTrue();

    Optional<Tramite> findByIdAndActivoTrue(Long id);

    boolean existsByIdAndActivoTrue(Long id);

    Optional<Tramite> findByIdAndActivoFalse(Long id);

    boolean existsByIdAndActivoFalse(Long id);
}
