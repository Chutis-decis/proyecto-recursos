package com.humans.resource.entity.DatosIngreso;
import com.humans.resource.entity.DatosFTD.Beca;
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

    @OneToOne(cascade = CascadeType.ALL)
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


    @ManyToOne
    @JoinColumn(name = "datos_personales_id")
    private Beca.DatosPersonales datosPersonales;
}
