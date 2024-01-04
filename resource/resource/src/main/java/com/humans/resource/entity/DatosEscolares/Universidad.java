package com.humans.resource.entity.DatosEscolares;

import com.humans.resource.entity.DatosEscolares.DatosEscolares;
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

    private boolean activo = true;

}
