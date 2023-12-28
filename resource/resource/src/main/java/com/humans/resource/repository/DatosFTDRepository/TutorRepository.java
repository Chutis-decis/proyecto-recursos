package com.humans.resource.repository.DatosFTDRepository;

import com.humans.resource.entity.DatosFTD.Tutor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TutorRepository extends JpaRepository<Tutor, Long> {

    List<Tutor> findByActivoTrue();

    Optional<Tutor> findByIdAndActivoTrue(Long id);

    boolean existsByIdAndActivoTrue(Long id);

    Optional<Tutor> findByIdAndActivoFalse(Long id);

    boolean existsByIdAndActivoFalse(Long id);
}
