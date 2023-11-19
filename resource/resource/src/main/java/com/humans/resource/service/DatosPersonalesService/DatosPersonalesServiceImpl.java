package com.humans.resource.service.DatosPersonalesService;

import com.humans.resource.entity.DatosFTD.Beca;
import com.humans.resource.repository.DatosPersonalesRepository.DatosPersonalesRepository;
import com.humans.resource.repository.DatosPersonalesRepository.DatosPersonalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class DatosPersonalesServiceImpl implements DatosPersonalesService {

    private final DatosPersonalesRepository datosPersonalesRepository;

    @Autowired
    public DatosPersonalesServiceImpl(DatosPersonalesRepository datosPersonalesRepository) {
        this.datosPersonalesRepository = datosPersonalesRepository;
    }

    @Override
    public Beca.DatosPersonales createDatosPersonales(Beca.DatosPersonales datosPersonales) {
        return datosPersonalesRepository.save(datosPersonales);
    }

    @Override
    public Beca.DatosPersonales updateDatosPersonales(Long id, Beca.DatosPersonales datosPersonales) {
        return null;
    }

    @Override
    public Beca.DatosPersonales actualizarDatosPersonales(Long id, Beca.DatosPersonales datosNuevos) {
        Beca.DatosPersonales datosActuales = datosPersonalesRepository.findById(id).orElse(null);

        if (datosActuales != null) {
            // Actualiza todos los campos con los valores del objeto datosNuevos
            datosActuales.setNombres(datosNuevos.getNombres());
            datosActuales.setPrimerApellido(datosNuevos.getPrimerApellido());
            datosActuales.setSegundoApellido(datosNuevos.getSegundoApellido());
            datosActuales.setGenero(datosNuevos.getGenero());
            datosActuales.setCurp(datosNuevos.getCurp());
            datosActuales.setEstado(datosNuevos.getEstado());
            datosActuales.setCiudad(datosNuevos.getCiudad());
            datosActuales.setColonia(datosNuevos.getColonia());
            datosActuales.setCalle(datosNuevos.getCalle());
            datosActuales.setNumeroExterior(datosNuevos.getNumeroExterior());
            datosActuales.setNumeroInterior(datosNuevos.getNumeroInterior());
            datosActuales.setExtra(datosNuevos.getExtra());
            datosActuales.setCelular(datosNuevos.getCelular());
            datosActuales.setTelefono(datosNuevos.getTelefono());
            datosActuales.setCorreoPersonal(datosNuevos.getCorreoPersonal());
            datosActuales.setActivo(datosNuevos.isActivo());
            // Actualiza relaciones si es necesario

            // Guarda los datos actualizados en la base de datos
            return datosPersonalesRepository.save(datosActuales);
        }

        return null; // Retorna null si no se encuentra la entidad
    }


    @Override
    public List<Beca.DatosPersonales> getAllDatosPersonales() {
        return datosPersonalesRepository.findAll();
    }

    @Override
    public Beca.DatosPersonales getDatosPersonalesById(Long id) {
        return datosPersonalesRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteDatosPersonales(Long id) {
        Beca.DatosPersonales datosPersonales = datosPersonalesRepository.findById(id).orElse(null);
        if (datosPersonales != null) {
            // Perform logical deletion (set an inactive flag, etc.)
            datosPersonales.setActivo(false);
            datosPersonalesRepository.save(datosPersonales);
        }
    }
}
