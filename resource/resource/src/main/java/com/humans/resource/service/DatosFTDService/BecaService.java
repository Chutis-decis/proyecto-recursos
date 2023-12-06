package com.humans.resource.service.DatosFTDService;

import com.humans.resource.entity.DatosFTD.Beca;
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

    public void deleteBeca(Long id) {
        becaRepository.deleteById(id);
    }

}
