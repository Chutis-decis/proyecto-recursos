package com.humans.resource.repository.DatosIngresooRepository;

import com.humans.resource.entity.DatosIngreso.Perfilamiento;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PerfilamientoRepository extends JpaRepository<Perfilamiento, Long> {

    List<Perfilamiento> findByActivoTrue();

    Optional<Perfilamiento> findByIdAndActivoTrue(Long id);

    boolean existsByIdAndActivoTrue(Long id);

    Optional<Perfilamiento> findByIdAndActivoFalse(Long id);

    boolean existsByIdAndActivoFalse(Long id);
}
