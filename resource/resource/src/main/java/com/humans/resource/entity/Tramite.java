package com.humans.resource.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Tramite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String ESTADIAS;
    private String PRACTICAS_PROFESIONALES;
    private String RESIDENCIAS;
    private String SERVICIOSOCIAL;

    @OneToOne(mappedBy = "tramite", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private DatosIngreso datosIngreso;
}