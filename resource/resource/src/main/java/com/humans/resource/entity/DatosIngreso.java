package com.humans.resource.entity;

import com.humans.resource.enumeracion.Modalidad;
import com.humans.resource.enumeracion.Perfilamiento;
import com.humans.resource.enumeracion.Tramite;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

@Data
@Entity
@ToString

@Table
public class DatosIngreso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private Tramite tramite;

    @Enumerated(EnumType.STRING)
    private Perfilamiento perfilamiento;

    private String turno;
    private String horario;

    @Enumerated(EnumType.STRING)
    private Modalidad modalidad;

    private String cv;
    private String historialAcademico;


    @ManyToOne
    @JoinColumn(name = "datos_personales_id")
    private DatosPersonales datosPersonales;
}
