package com.humans.resource.repository;

import com.humans.resource.entity.DatosFTD;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DatosFTDRepository extends JpaRepository<DatosFTD, Long> {
    List<DatosFTD> findByActivo(boolean activo);
}
