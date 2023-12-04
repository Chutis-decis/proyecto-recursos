package com.humans.resource.entity.DatosFTD;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "beca")
public class Beca {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipo;


    public Beca(String tipo) {
        this.tipo = tipo;
    }
}