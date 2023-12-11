package com.humans.resource.entity.DatosFTD;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.humans.resource.entity.DatosPersonales.DatosPersonales;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;


@Entity
@Data
@ToString
@Table(name ="datos_ftd")
public class DatosFTD {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombreProyecto;
    private String avanceProyecto; // Puede ser "En progreso" o "Finalizado"
    private String evaluacionProyecto; // Enlace al archivo de evaluación
    private String areaInfotec;

    @ManyToOne
    @JoinColumn(name = "tutor_id")
    private Tutor tutor;

    @ManyToOne
    @JoinColumn(name = "beca_id")
    private Beca beca; // Puede ser "No tiene", "Becas A", "Becas Bronce", "Becas Plata", "Desarrolladores del Bienestar"

    @ManyToOne
    @JoinColumn(name = "curso_id")
    private Curso curso;

    @ManyToOne
    @JoinColumn(name = "grupo_id")
    private  Grupo grupo;

    @Temporal(TemporalType.DATE)
    private LocalDate fechaIngreso;
    @Temporal(TemporalType.DATE)
    private LocalDate fechaTermino;

    private String enlace;
    private String matriculaFTD; // En formato "aa-uu-gg-id"
    private String correoBecario;
    private String estatusTramite;

    @Column(name = "activo")
    private boolean activo = true;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "datos_personales_id")
    private DatosPersonales datosPersonales;

}