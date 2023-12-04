package com.humans.resource.entity.DatosFTD;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
    @Table(name = "curso")
    public class Curso {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
    @Column(name = "nombre")
    private String nombre;

    public Curso(String nombre) {
        this.nombre = nombre;
    }
}

