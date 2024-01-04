package com.humans.resource.entity.DatosFTD;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

    @Entity
    @Data
    @Table(name = "grupo")
    public class Grupo {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        @Column(name = "nombre")
        private String nombre;


        private boolean activo = true;
    }

