package com.humans.resource.entity.DatosEscolares;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.humans.resource.entity.DatosFTD.Beca;
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

    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "universidad_id")
    private Universidad universidad;

    private String matriculaEscolar;

    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "modalidad_id")
    private ModalidadEscolar modalidadEscolar;

    @OneToMany(mappedBy = "datosEscolares")
    private List<PlanEducativo> planesEducativos;

    private String periodo;


    // Relacion u Mapeo
    @ManyToOne
    @JoinColumn(name = "id_datosPersonales")
    private Beca.DatosPersonales datosPersonales;

}
