package com.humans.resource.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name = "beca")
public class Beca {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipo;
    private String descripcion;
    private Date fechaInicio;
    private Date fechaFin;

    @Column(name = "activo")
    private boolean activo = true;
}
