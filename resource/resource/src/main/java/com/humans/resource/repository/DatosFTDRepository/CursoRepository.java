package com.humans.resource.repository.DatosFTDRepository;

import com.humans.resource.entity.DatosFTD.Curso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> {
}
