package com.humans.resource.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table
public class Universidad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String nombre;

    @OneToMany(mappedBy = "universidad", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DatosEscolares> datosEscolares;


}
