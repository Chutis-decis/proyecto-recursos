package com.humans.resource.service.DatosEscolaresService;

import com.humans.resource.entity.DatosEscolares.ModalidadEscolar;
import com.humans.resource.repository.DatosEscolaresRepository.ModalidadEscolarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ModalidadEscolarService {

    @Autowired
    private ModalidadEscolarRepository modalidadEscolarRepository;

    public ModalidadEscolar agregarModalidadEscolar(ModalidadEscolar modalidadEscolar) {
        return modalidadEscolarRepository.save(modalidadEscolar);
    }

    public ModalidadEscolar modificarModalidadEscolar(Long id, ModalidadEscolar modalidadEscolar) {
        if (modalidadEscolarRepository.existsById(id)) {
            modalidadEscolar.setId(id);
            return modalidadEscolarRepository.save(modalidadEscolar);
        }
        return null; // Puedes manejar el caso de error de la manera que prefieras
    }

    public void darDeBajaModalidadEscolar(Long id) {
        modalidadEscolarRepository.deleteById(id);
    }

    public List<ModalidadEscolar> getModalidadEscolar(){
        return modalidadEscolarRepository.findAll();
    }
    public ModalidadEscolar getModalidadEscolarById(Long id){
        return modalidadEscolarRepository.findById(id).orElse(null);
    }
}