package com.humans.resource.repository.DatosFTDRepository;

import com.humans.resource.entity.DatosFTD.Beca;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BecaRepository extends JpaRepository<Beca, Long> {

    List<Beca> findByActivoTrue();

    Optional<Beca> findByIdAndActivoTrue(Long id);

    boolean existsByIdAndActivoTrue(Long id);

    Optional<Beca> findByIdAndActivoFalse(Long id);

    boolean existsByIdAndActivoFalse(Long id);

}
