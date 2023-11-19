package com.humans.resource.repository.DatosIngresooRepository;

import com.humans.resource.entity.DatosIngreso.Modalidad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModalidadRepository extends JpaRepository<Modalidad, Long> {
}