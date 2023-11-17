package com.humans.resource.repository;

import com.humans.resource.entity.Beca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BecaRepository extends JpaRepository<Beca, Long> {
}
