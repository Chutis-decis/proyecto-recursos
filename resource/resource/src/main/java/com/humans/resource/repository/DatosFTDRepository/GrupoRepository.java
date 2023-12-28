package com.humans.resource.repository.DatosFTDRepository;

import com.humans.resource.entity.DatosFTD.Grupo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GrupoRepository extends JpaRepository<Grupo, Long> {


    List<Grupo> findByActivoTrue();

    Optional<Grupo> findByIdAndActivoTrue(Long id);

    boolean existsByIdAndActivoTrue(Long id);

    Optional<Grupo> findByIdAndActivoFalse(Long id);

    boolean existsByIdAndActivoFalse(Long id);
}
