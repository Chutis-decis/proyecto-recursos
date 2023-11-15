package com.humans.resource.entity;

import com.humans.resource.entity.DatosEscolares;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;


@Entity
@Data
@Table
public class ModalidadEscolar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    @OneToMany(mappedBy = "modalidadEscolar")
    private List<DatosEscolares> datosEscolares;
}
