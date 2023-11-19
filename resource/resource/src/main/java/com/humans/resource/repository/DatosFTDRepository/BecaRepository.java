package com.humans.resource.repository.DatosFTDRepository;

import com.humans.resource.entity.DatosFTD.Beca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BecaRepository extends JpaRepository<Beca, Long> {
}
