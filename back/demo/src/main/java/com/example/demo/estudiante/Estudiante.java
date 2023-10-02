package com.example.demo.estudiante;


import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString


@Entity
@Table
public class Estudiante {

    @Id
    @SequenceGenerator(
            name = "estudiante_sequence",
            sequenceName = "estudiante_sequence",
            allocationSize = 1

    )

    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator =  "estudiante_sequence"
    )
//    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String nombres;
    private String primerApellido;
    private String segundoApellido;
    private String genero;
    private String curp;
    private String estado;
    private String ciudad;
    private String domicilio;
    private String celular;
    private String telefono;
    private String correoPersonal;
    private boolean deleted;

}
