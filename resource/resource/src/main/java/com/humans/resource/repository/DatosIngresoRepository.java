package com.humans.resource.repository;

import com.humans.resource.entity.DatosIngreso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DatosIngresoRepository extends JpaRepository<DatosIngreso, Long> {

    List<DatosIngreso> findByModalidadId(Long modalidadId);

}
