package com.humans.resource.repository.DatosPersonalesRepository;

import com.humans.resource.entity.DatosPersonales.DatosPersonales;
import com.humans.resource.service.securityService.PasswordEncoderService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface DatosPersonalesService {
    List<DatosPersonales> getAllDatosPersonales();
    DatosPersonales getDatosPersonalesById(Long id);
    DatosPersonales createDatosPersonales(DatosPersonales datosPersonales);
    DatosPersonales updateDatosPersonales(Long id, DatosPersonales datosPersonales);
    void deleteDatosPersonales(Long id);
    void activateDatosPersonales(Long id);

    void eliminarDatosPersonales(Long id);
    DatosPersonales actualizarDatosPersonales(Long id,DatosPersonales datosNuevos);

    DatosPersonales findByUsernames(String username);
}
