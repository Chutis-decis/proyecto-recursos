package com.humans.resource.service.DatosEscolaresService;

import com.humans.resource.entity.DatosEscolares.Universidad;
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

    public void deleteUniversity(Long universityId) {
        universityRepository.deleteById(universityId);
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
}

