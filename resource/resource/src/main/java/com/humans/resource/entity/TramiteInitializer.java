package com.humans.resource.entity;

import com.humans.resource.repository.ModalidadRepository;
import com.humans.resource.repository.TramiteRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class TramiteInitializer implements CommandLineRunner {

    private TramiteRepository tramiteRepository;


    public TramiteInitializer(TramiteRepository tramiteRepository) {
        this.tramiteRepository = tramiteRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        Tramite estadias = new Tramite();
        estadias.setNombre("Estadias");
        tramiteRepository.save(estadias);


        Tramite residencias = new Tramite();
        residencias.setNombre("RESIDENCIAS");
        tramiteRepository.save(residencias);

        Tramite servicioSocial = new Tramite();
        servicioSocial.setNombre("SERVICIOSOCIAL");
        tramiteRepository.save(servicioSocial);


    }
}
