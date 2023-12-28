package com.humans.resource.repository.DatosIngresooRepository;

import com.humans.resource.entity.DatosIngreso.Modalidad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ModalidadRepository extends JpaRepository<Modalidad, Long> {

    List<Modalidad> findByActivoTrue();

    Optional<Modalidad> findByIdAndActivoTrue(Long id);

    boolean existsByIdAndActivoTrue(Long id);

    Optional<Modalidad> findByIdAndActivoFalse(Long id);

    boolean existsByIdAndActivoFalse(Long id);
}