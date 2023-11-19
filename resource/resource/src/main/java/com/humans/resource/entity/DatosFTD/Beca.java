package com.humans.resource.entity.DatosFTD;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.humans.resource.entity.DatosEscolares.DatosEscolares;
import com.humans.resource.entity.DatosFTD.DatosFTD;
import com.humans.resource.entity.DatosIngreso.DatosIngreso;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name = "beca")
public class Beca {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipo;
    private String descripcion;
    private Date fechaInicio;
    private Date fechaFin;

    @Column(name = "activo")
    private boolean activo = true;

    @Entity
        @Data
        @ToString
    @Table
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
        public static class DatosPersonales {
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
               private List<DatosFTD> datosFTD;

        }
}
