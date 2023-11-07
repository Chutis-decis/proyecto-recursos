package com.humans.resource.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "Modalidad")
public class Modalidad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id ;
     private String nombre;

    @OneToMany(cascade =CascadeType.ALL, mappedBy = "modalidad")
    private List<DatosIngreso> datosIngresos;

}
