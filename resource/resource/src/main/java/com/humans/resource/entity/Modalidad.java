package com.humans.resource.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Modalidad")
public class Modalidad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id ;

    @Column(name = "modalidad_nombre")
    private String nombre;

    @ManyToOne
    @JoinColumn(name = "datos_ingreso_id")
    private DatosIngreso datosIngreso;

}
