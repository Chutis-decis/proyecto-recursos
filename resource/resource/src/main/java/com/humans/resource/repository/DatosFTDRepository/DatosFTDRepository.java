package com.humans.resource.repository.DatosFTDRepository;

import com.humans.resource.entity.DatosFTD.DatosFTD;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface DatosFTDRepository extends JpaRepository<DatosFTD, Long> {
    List<DatosFTD> findAllByActivoTrue();

    Optional<DatosFTD> findByIdAndActivoTrue(Long id);

    List<DatosFTD> findByIdAndActivoFalse(Long id);


}
