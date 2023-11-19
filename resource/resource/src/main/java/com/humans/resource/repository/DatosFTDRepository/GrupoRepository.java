package com.humans.resource.repository.DatosFTDRepository;


import com.humans.resource.entity.DatosFTD.Grupo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GrupoRepository extends JpaRepository<Grupo, Long> {

}
