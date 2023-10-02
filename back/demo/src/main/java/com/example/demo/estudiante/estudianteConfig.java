package com.example.demo.estudiante;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;


@Configuration
public class estudianteConfig {

    @Bean
    CommandLineRunner commandLineRunner(EstudianteRepository repository){
        return args -> {
                    Estudiante overman = new Estudiante(
                            1L,
                            "Overman",
                            "Morales",
                            "Perez",
                            "Masculino",
                            "MOPO000703HCSRRVA2",
                            "Chiapas",
                            "Mexico",
                            "Jardin de huacahusco",
                            "12345678910",
                            "9641234567",
                            "overman@gmail.com",
                            false
                    );

            Estudiante diego = new Estudiante(
                    2L,
                    "diego",
                    "Diaz",
                    "Velazques",
                    "Masculino",
                    "DOMO703HCSRRVA3",
                    "Leon",
                    "Guanajuato",
                    "Balkash",
                    "9876543210",
                    "5619392488",
                    "diego@gmail.com",
                    false
            );

            repository.saveAll(
                    List.of(overman, diego)
            );
        };
    }

}
