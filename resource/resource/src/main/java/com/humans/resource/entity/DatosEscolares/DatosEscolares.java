package com.humans.resource.entity.DatosEscolares;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.humans.resource.entity.DatosFTD.Beca;
import com.humans.resource.entity.DatosPersonales.DatosPersonales;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

import java.util.List;

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

    @ManyToOne
    @JoinColumn(name = "universidad_id")
    private Universidad universidad;

    private String matriculaEscolar;

    @ManyToOne
    @JoinColumn(name = "modalidad_id")
    private ModalidadEscolar modalidadEscolar;

    @ManyToOne
    @JoinColumn(name = "plan_educativo_id")
    private PlanEducativo planesEducativos;

    @ManyToOne
    @JoinColumn(name = "periodo_id")
    private Periodo periodo;

    @Column(name = "activo")
    private boolean activo = true;
    // Relacion u Mapeo
    @ManyToOne
    @JoinColumn(name = "id_datosPersonales")
    private DatosPersonales datosPersonales;

}
