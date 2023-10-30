package com.humans.resource.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Tramite")
public class Tramite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;

    @Column(name = "tramite_nombre")
    private String nombre;

    @ManyToOne
    @JoinColumn(name = "datos_ingreso_id")
    private DatosIngreso datosIngreso;
}
