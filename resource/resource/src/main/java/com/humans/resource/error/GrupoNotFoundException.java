package com.humans.resource.error;

public class GrupoNotFoundException extends RuntimeException {

    public GrupoNotFoundException(Long grupoId) {
        super("No se pudo encontrar al grupo con ID: " + grupoId);
    }
}

