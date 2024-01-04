package com.humans.resource.entity.DatosEscolares;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table
public class PlanEducativo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;

    private boolean activo = true;
}