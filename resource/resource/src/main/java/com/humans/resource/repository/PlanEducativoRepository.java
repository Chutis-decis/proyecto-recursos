package com.humans.resource.repository;

import com.humans.resource.entity.PlanEducativo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanEducativoRepository extends JpaRepository<PlanEducativo, Long> {
}
