package com.humans.resource.entity.DatosPersonales;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.humans.resource.entity.DatosEscolares.DatosEscolares;
import com.humans.resource.entity.DatosIngreso.DatosIngreso;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@ToString
@Table
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public  class DatosPersonales {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombres;
    private String primerApellido;
    private String segundoApellido;
    private String genero;
    private String curp;
    private String estado;
    private String ciudad;

    private String colonia;
    private String calle;
    private String numeroExterior;
    private String numeroInterior;
    private String extra;

    private String celular;
    private String telefono;
    private String correoPersonal;
    private boolean activo = true;


    //Relacion u Mappeo con DatosEscolares

    @OneToMany(mappedBy = "datosPersonales",cascade = CascadeType.ALL, fetch = FetchType.LAZY,orphanRemoval = true)
    @JsonIgnore
    private List<DatosEscolares> datosEscolares = new ArrayList<>();


    //Relacion u mapeo con DatosIngreso
    @OneToMany(mappedBy = "datosPersonales", cascade = CascadeType.ALL)
    private List<DatosIngreso> datosIngreso;

    //Relacion u mapeo con DatosFTD

    @OneToMany(mappedBy = "datosPersonales", cascade = CascadeType.ALL)
    private List<com.humans.resource.entity.DatosFTD.DatosFTD> datosFTD;

}

