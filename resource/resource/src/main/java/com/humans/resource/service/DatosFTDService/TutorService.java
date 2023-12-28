package com.humans.resource.service.DatosFTDService;

import com.humans.resource.entity.DatosFTD.Tutor;
import com.humans.resource.error.ResourceNotFoundException;
import com.humans.resource.repository.DatosFTDRepository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TutorService {

    private final TutorRepository tutorRepository;

    @Autowired
    public TutorService(TutorRepository tutorRepository)
    { this.tutorRepository = tutorRepository;}


    public List<Tutor> getAlltutores()
    { return tutorRepository.findAll();}

    public Optional<Tutor> getTutorById( Long id)
    {return tutorRepository.findById(id);}


    public Tutor saveTutor( Tutor tutor )
    {return tutorRepository.save(tutor);}

    public void deleteTutor (Long id) {
        Tutor tutor = tutorRepository.findByIdAndActivoTrue(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        tutor.setActivo(false);  // Marcar como inactivo en lugar de eliminar físicamente
        tutorRepository.save(tutor);
    }

    public void activateTutor(Long id) {
        Tutor tutor = tutorRepository.findByIdAndActivoFalse(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        tutor.setActivo(true);  // Marcar como inactivo en lugar de eliminar físicamente
        tutorRepository.save(tutor);
    }

    public void eliminarTutor(Long id) {
        Tutor tutor = tutorRepository.findByIdAndActivoTrue(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        tutorRepository.delete(tutor);
    }
}



