package com.humans.resource.entity.DatosIngreso;
import com.humans.resource.entity.DatosPersonales.DatosPersonales;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

@Data
@Entity
@ToString
public class DatosIngreso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "tramite_id")
    private Tramite tramite;


    @ManyToOne
    private Perfilamiento perfilamiento;

    private String turno;
    private String horario;

    @ManyToOne
    @JoinColumn(name = "modalidad_id")
    private Modalidad modalidad;


    private String cv;
    private String historialAcademico;

    private boolean activo = true;
    @ManyToOne
    @JoinColumn(name = "datos_personales_id")
    private DatosPersonales datosPersonales;
}
