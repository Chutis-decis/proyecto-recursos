package com.humans.resource.entity.DatosIngreso;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table (name = "tramite")
public class Tramite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombreTramite;
    private boolean activo = true;
}