package com.humans.resource.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "tutor")
public class Tutor{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    @Column(name = "activo")
    private boolean activo = true;

    @OneToMany(mappedBy = "tutor", cascade = CascadeType.ALL)
    private List<DatosFTD> datosFTDList;
}
