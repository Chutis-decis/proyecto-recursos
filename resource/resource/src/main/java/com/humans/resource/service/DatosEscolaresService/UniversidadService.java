package com.humans.resource.service.DatosEscolaresService;

import com.humans.resource.entity.DatosEscolares.Universidad;
import com.humans.resource.error.ResourceNotFoundException;
import com.humans.resource.repository.DatosEscolaresRepository.UniversidadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UniversidadService {

    @Autowired
    private UniversidadRepository universityRepository;

    public Universidad addUniversity(Universidad university) {
        return universityRepository.save(university);
    }

    public Universidad updateUniversity(Long universityId, Universidad university) {
        Universidad existingUniversity = universityRepository.findById(universityId).orElse(null);

        if (existingUniversity == null) {
            return null; // Manejar el caso en que no se encuentra la universidad
        }

        // Actualiza los campos de la universidad existente con los valores proporcionados
        existingUniversity.setNombre(university.getNombre());


        // Actualiza otros campos según sea necesario

        return universityRepository.save(existingUniversity);
    }

    public List<Universidad> getUniversidad (){
        return universityRepository.findAll();
    }

    public Universidad getUniversidadById(Long id){
        return universityRepository.findById(id).orElse(null);
    }

    public void EliminarUniversidad (Long id) {
        Universidad universidad = universityRepository.findByIdAndActivoTrue(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        universidad.setActivo(false);  // Marcar como inactivo en lugar de eliminar físicamente
        universityRepository.save(universidad);
    }

    public void activateUniversity(Long id) {
        Universidad universidad = universityRepository.findByIdAndActivoFalse(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        universidad.setActivo(true);  // Marcar como inactivo en lugar de eliminar físicamente
        universityRepository.save(universidad);
    }

    public void eliminarUniversity(Long id) {
        universityRepository.deleteById(id);
    }
}
