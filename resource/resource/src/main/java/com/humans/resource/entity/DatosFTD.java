package com.humans.resource.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;
import java.util.Date;

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

    private String beca; // Puede ser "No tiene", "Becas A", "Becas Bronce", "Becas Plata", "Desarrolladores del Bienestar"
    private Date fechaIngreso;
    private Date fechaTermino;

    @ManyToOne
    @JoinColumn(name = "grupo_id")
    private Grupo grupo;

    private String enlace;
    private String matriculaFTD; // En formato "aa-uu-gg-id"
    private String correoBecario;
    private String estatusTramite; // Puede ser "En progreso" o "Finalizado"
    private String cursos; // Puede contener múltiples cursos separados por comas
    @Column(name = "activo")
    private boolean activo = true;


    @ManyToOne
    @JoinColumn(name = "datos_personales_id")
    private DatosPersonales datosPersonales;


}

