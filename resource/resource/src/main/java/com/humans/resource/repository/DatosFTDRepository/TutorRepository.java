package com.humans.resource.repository.DatosFTDRepository;

import com.humans.resource.entity.DatosFTD.Tutor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TutorRepository extends JpaRepository<Tutor, Long> {

}
