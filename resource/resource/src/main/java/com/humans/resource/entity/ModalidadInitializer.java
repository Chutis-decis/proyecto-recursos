package com.humans.resource.entity;

import com.humans.resource.repository.ModalidadRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ModalidadInitializer implements CommandLineRunner {

    private final ModalidadRepository modalidadRepository;

    public ModalidadInitializer(ModalidadRepository modalidadRepository) {
        this.modalidadRepository = modalidadRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Agregar las modalidades estáticas a la base de datos
        Modalidad presencial = new Modalidad();
        presencial.setNombre("Presencial");
        modalidadRepository.save(presencial);

        Modalidad enLinea = new Modalidad();
        enLinea.setNombre("EnLinea");
        modalidadRepository.save(enLinea);

        Modalidad hibrida = new Modalidad();
        hibrida.setNombre("Hibrida");
        modalidadRepository.save(hibrida);
    }
}
