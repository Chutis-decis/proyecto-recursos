package com.humans.resource.service;

import com.humans.resource.entity.Beca;
import com.humans.resource.entity.Tutor;
import com.humans.resource.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class TutorService {

    private final TutorRepository tutorRepository;

    @Autowired
    public TutorService(TutorRepository tutorRepository) {
        this.tutorRepository = tutorRepository;
    }

    public List<Tutor> getAllTutors() {
        return tutorRepository.findAll();
    }

    public Optional<Tutor> getTutorById(Long id) {
        return tutorRepository.findById(id);
    }

    public Tutor saveTutor(Tutor tutor) {
        return tutorRepository.save(tutor);
    }

    public void deleteTutor(Long id) {
        Tutor tutor = tutorRepository.findById(id).orElse(null);
        if (tutor != null) {
            tutor.setActivo(false);
            tutorRepository.save(tutor);
        }
    }
}
