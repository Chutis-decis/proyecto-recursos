package com.humans.resource.entity.DatosIngreso;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Modalidad")
public class Modalidad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id ;
     private String nombre;

    private boolean activo = true;
}
