package com.humans.resource.entity.docMensuales;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Document{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String status;
    private Date uploadDate;
    private String documentType;

    @Lob
    private byte[] file;
    private boolean validated;

    @ElementCollection
    private List<String> comments;

}

