package com.humans.resource.service.DatosIngresoService;


import com.humans.resource.entity.DatosIngreso.Modalidad;
import com.humans.resource.error.ResourceNotFoundException;
import com.humans.resource.repository.DatosIngresooRepository.ModalidadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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
    //Obtenciòn de todos la Modalida
    public List<Modalidad> listarTodos() {return modalidadRepository.findAll();}


    // UPDATE - Actualizar una Modalidad por ID
    public Modalidad updateModalidad(Long id, Modalidad updatedModalidad) {
        if (modalidadRepository.existsById(id)) {
            updatedModalidad.setId(id);
            return modalidadRepository.save(updatedModalidad);
        }
        return null; // O manejar el caso donde la entidad con el ID no existe
    }

    public void deleteModalidad(Long id) {
        Modalidad modalidad = modalidadRepository.findByIdAndActivoTrue(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        modalidad.setActivo(false);  // Marcar como inactivo en lugar de eliminar físicamente
        modalidadRepository.save(modalidad);
    }

    public void activateModalidad(Long id) {
        Modalidad modalidad = modalidadRepository.findByIdAndActivoFalse(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        modalidad.setActivo(true);  // Marcar como inactivo en lugar de eliminar físicamente
        modalidadRepository.save(modalidad);
    }

    public void eliminarModalidad(Long id) {
        modalidadRepository.deleteById(id);
    }
}