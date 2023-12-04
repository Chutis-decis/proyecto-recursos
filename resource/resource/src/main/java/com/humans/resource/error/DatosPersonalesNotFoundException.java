package com.humans.resource.error;

public class DatosPersonalesNotFoundException extends RuntimeException {

    public DatosPersonalesNotFoundException(Long datosPersonalesId) {
        super("No se pudo encontrar datos personales con ID: " + datosPersonalesId);
    }
}

