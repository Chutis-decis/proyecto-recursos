package com.humans.resource.service.DatosFTDService;

import com.humans.resource.entity.DatosFTD.Curso;
import com.humans.resource.error.ResourceNotFoundException;
import com.humans.resource.repository.DatosFTDRepository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class CursoService {

    private final CursoRepository cursoRepository;

    @Autowired
    public CursoService(CursoRepository cursoRepository) {
        this.cursoRepository = cursoRepository;
    }

    public List<Curso> getAllCursos() {
        return cursoRepository.findAll();
    }

    public Optional<Curso> getCursoById(Long id) {
        return cursoRepository.findById(id);
    }

    public Curso saveCurso(Curso curso) {
        return cursoRepository.save(curso);
    }


    public void eliminarCurso (Long id) {
        Curso curso  = cursoRepository.findByIdAndActivoTrue(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        curso.setActivo(false);  // Marcar como inactivo en lugar de eliminar físicamente
        cursoRepository.save(curso);
    }

    public void activateCurso(Long id) {
        Curso curso = cursoRepository.findByIdAndActivoFalse(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        curso.setActivo(true);  // Marcar como inactivo en lugar de eliminar físicamente
        cursoRepository.save(curso);
    }

    public void deleteCurso(Long id) {
        Curso curso = cursoRepository.findByIdAndActivoTrue(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        cursoRepository.delete(curso);
    }
}