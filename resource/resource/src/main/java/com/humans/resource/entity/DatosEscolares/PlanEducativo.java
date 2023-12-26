package com.humans.resource.entity.DatosEscolares;

import com.humans.resource.entity.DatosEscolares.DatosEscolares;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table
public class PlanEducativo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;

    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "datos_escolares_id")
    private DatosEscolares datosEscolares;

}