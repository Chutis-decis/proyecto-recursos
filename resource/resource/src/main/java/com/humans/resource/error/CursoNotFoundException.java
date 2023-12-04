package com.humans.resource.error;

public class CursoNotFoundException extends RuntimeException {
        public CursoNotFoundException(Long cursosId) {
            super("No se pudo encontrar al grupo con ID: " + cursosId);
        }
    }
