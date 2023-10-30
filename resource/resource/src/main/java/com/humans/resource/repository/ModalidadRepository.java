package com.humans.resource.repository;

import com.humans.resource.entity.Modalidad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModalidadRepository extends JpaRepository<Modalidad, Long> {
    Modalidad findByNombre(String nombre);
}
