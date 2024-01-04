package com.humans.resource.entity.DatosIngreso;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table
public class Perfilamiento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombrePerfilamiento;

    private boolean activo = true;

}