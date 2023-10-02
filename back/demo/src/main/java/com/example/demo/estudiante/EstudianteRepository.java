package com.example.demo.estudiante;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EstudianteRepository extends JpaRepository<Estudiante , Long>{

    @Query("SELECT s FROM Estudiante s WHERE s.correoPersonal = ?1")
    Optional<Estudiante> findEstudianteByCorreoPersonal(String correoPersonal);

    @Modifying
    @Query("UPDATE Estudiante e SET e.deleted = true WHERE e.id = ?1")
    void softDeleteById(Long id);
}


