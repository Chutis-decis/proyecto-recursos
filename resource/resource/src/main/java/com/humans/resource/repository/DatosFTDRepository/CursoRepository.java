package com.humans.resource.repository.DatosFTDRepository;

import com.humans.resource.entity.DatosFTD.Curso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> {
    List<Curso> findByActivoTrue();

    Optional<Curso> findByIdAndActivoTrue(Long id);

    boolean existsByIdAndActivoTrue(Long id);

    Optional<Curso> findByIdAndActivoFalse(Long id);

    boolean existsByIdAndActivoFalse(Long id);

}
