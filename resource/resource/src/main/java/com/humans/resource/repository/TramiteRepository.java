package com.humans.resource.repository;

import com.humans.resource.entity.Modalidad;
import com.humans.resource.entity.Tramite;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TramiteRepository extends JpaRepository<Tramite,Long> {
    Tramite findByNombre(String nombre);
}
