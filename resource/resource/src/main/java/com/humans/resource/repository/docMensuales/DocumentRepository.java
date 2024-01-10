package com.humans.resource.repository.docMensuales;

import com.humans.resource.entity.docMensuales.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface    DocumentRepository extends JpaRepository<Document, Long> {
}
