package com.example.demo.estudiante;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class EstudianteService {

    private final EstudianteRepository estudianteRepository;

    @Autowired
    public EstudianteService(EstudianteRepository estudianteRepository) {
        this.estudianteRepository = estudianteRepository;
    }

    public List<Estudiante> getEstudiante(){
     return estudianteRepository.findAll();

    }

    public void addNewEstudiante(Estudiante estudiante) {
        Optional<Estudiante> estudianteOptional = estudianteRepository
                .findEstudianteByCorreoPersonal(estudiante.getCorreoPersonal());
        if (estudianteOptional.isPresent()){
            throw new IllegalStateException("Email taken");
        }

        estudianteRepository.save(estudiante);
    }

    public void eliminarEstudiante(Long estudianteId) {
        Estudiante estudiante = estudianteRepository.findById(estudianteId)
                .orElseThrow(() -> new IllegalStateException(
                        "Estudiante con ID " + estudianteId + " no existe"));

        estudiante.setDeleted(true); // Marcar como eliminado lógicamente
        estudianteRepository.save(estudiante);
    }

    @Transactional
    public void actualizarEstudiante(Long estudianteId, String name, String correoPersonal) {
        Estudiante estudiante = estudianteRepository.findById(estudianteId)
                .orElseThrow(() -> new IllegalStateException(
                        "Estudiante con ID " + estudianteId + " no existe"));

        if (name != null && name.length() > 0 && !Objects.equals(estudiante.getNombres(), name)) {
            estudiante.setNombres(name);
        }

        if (correoPersonal != null && correoPersonal.length() > 0 &&
                !Objects.equals(estudiante.getCorreoPersonal(), correoPersonal)) {
            Optional<Estudiante> estudianteOptional = estudianteRepository
                    .findEstudianteByCorreoPersonal(correoPersonal);

            if (estudianteOptional.isPresent()) {
                throw new IllegalStateException("Correo electrónico ya registrado");
            }

            estudiante.setCorreoPersonal(correoPersonal);
        }
    }

}


