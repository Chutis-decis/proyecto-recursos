package com.humans.resource.error;

public class TutorNotFoundException extends RuntimeException {

    public TutorNotFoundException(Long tutorId) {
        super("No se pudo encontrar al tutor con ID: " + tutorId);
    }
}
