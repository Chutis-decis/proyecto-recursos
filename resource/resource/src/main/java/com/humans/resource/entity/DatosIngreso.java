package com.humans.resource.entity;

import com.humans.resource.enumeracion.TipoModalidad;
import com.humans.resource.enumeracion.TipoPerfilamiento;
import com.humans.resource.enumeracion.TipoTramite;
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
    private TipoTramite tramite;

    @Enumerated(EnumType.STRING)
    private TipoPerfilamiento perfilamiento;


    private String turno;
    private String horario;

    @Enumerated(EnumType.STRING)
    private TipoModalidad modalidad;

    private String cv;
    private String historialAcademico;


    @ManyToOne
    @JoinColumn(name = "datos_personales_id")
    private DatosPersonales datosPersonales;
}
