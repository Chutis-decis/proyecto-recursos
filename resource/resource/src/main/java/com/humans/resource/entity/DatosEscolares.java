package com.humans.resource.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString
@Table
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class DatosEscolares {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String correoEscolar;
    private String carrera;
    private String universidad;
    private String matriculaEscolar;
    private String modalidadEscolar;
    private String planEducativo;
    private String periodo;


    // Relacion u Mapeo
    @ManyToOne
    @JoinColumn(name = "datos_personales_id")
    private DatosPersonales datosPersonales;

}
