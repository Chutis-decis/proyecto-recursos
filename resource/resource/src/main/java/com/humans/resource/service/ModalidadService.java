package com.humans.resource.service;


import com.humans.resource.entity.Modalidad;
import com.humans.resource.repository.ModalidadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ModalidadService {

    private final ModalidadRepository modalidadRepository;

    @Autowired
    public ModalidadService(ModalidadRepository modalidadRepository) {
        this.modalidadRepository = modalidadRepository;
    }

    // CREATE - Agregar una nueva Modalidad
    public Modalidad createModalidad(Modalidad modalidad) {
        return modalidadRepository.save(modalidad);
    }

    // READ - Obtener una Modalidad por ID
    public Modalidad getModalidadById(Long id) {
        Optional<Modalidad> optionalModalidad = modalidadRepository.findById(id);
        return optionalModalidad.orElse(null);
    }

    // UPDATE - Actualizar una Modalidad por ID
    public Modalidad updateModalidad(Long id, Modalidad updatedModalidad) {
        if (modalidadRepository.existsById(id)) {
            updatedModalidad.setId(id);
            return modalidadRepository.save(updatedModalidad);
        }
        return null; // O manejar el caso donde la entidad con el ID no existe
    }

    // DELETE - Eliminar una Modalidad por ID
    public boolean deleteModalidad(Long id) {
        if (modalidadRepository.existsById(id)) {
            modalidadRepository.deleteById(id);
            return true;
        }
        return false; // O manejar el caso donde la entidad con el ID no existe
    }

    // Otras operaciones personalizadas según sea necesario
}
