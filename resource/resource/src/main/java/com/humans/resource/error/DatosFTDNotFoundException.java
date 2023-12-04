package com.humans.resource.error;

public class DatosFTDNotFoundException extends RuntimeException {

    public DatosFTDNotFoundException(Long datosFTDId) {
        super("No se pudo encontrar datos FTD con ID: " + datosFTDId);
    }
}
