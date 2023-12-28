package com.humans.resource.service.DatosFTDService;

import com.humans.resource.entity.DatosFTD.Beca;
import com.humans.resource.error.ResourceNotFoundException;
import com.humans.resource.repository.DatosFTDRepository.BecaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BecaService {

    private final BecaRepository becaRepository;

    @Autowired
    public BecaService(BecaRepository becaRepository) {
        this.becaRepository = becaRepository;
    }

    public List<Beca> getAllBecas() {
        return becaRepository.findAll();
    }

    public Optional<Beca> getBecaById(Long id) {
        return becaRepository.findById(id);
    }

    public Beca saveBeca(Beca beca) {
        return becaRepository.save(beca);
    }

    public void deleteBeca (Long id) {
        Beca beca = becaRepository.findByIdAndActivoTrue(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        beca.setActivo(false);  // Marcar como inactivo en lugar de eliminar físicamente
        becaRepository.save(beca);
    }

    public void activateBeca(Long id) {
        Beca beca = becaRepository.findByIdAndActivoFalse(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        beca.setActivo(true);  // Marcar como inactivo en lugar de eliminar físicamente
        becaRepository.save(beca);
    }

    public void eliminarBeca(Long id) {
        Beca beca = becaRepository.findByIdAndActivoTrue(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite Con ID " + id + " no Existe"));

        becaRepository.delete(beca);
    }

}
