package com.humans.resource.service.DatosIngresoService;

import com.humans.resource.entity.DatosIngreso.Tramite;
import com.humans.resource.error.ResourceNotFoundException;
import com.humans.resource.repository.DatosIngresooRepository.TramiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TramiteService {

    private final TramiteRepository tramiteRepository;

    @Autowired
    public TramiteService(TramiteRepository tramiteRepository) {
        this.tramiteRepository = tramiteRepository;
    }

    public List<Tramite> getAllTramites() {
        return tramiteRepository.findByActivoTrue();
    }

    public Tramite getTramiteById(Long id) {
        return tramiteRepository.findByIdAndActivoTrue(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite with ID " + id + " not found"));
    }

    public Tramite createTramite(Tramite tramite) {
        tramite.setActivo(true);
        return tramiteRepository.save(tramite);
    }

    public Tramite updateTramite(Long id, Tramite tramite) {
        if (tramiteRepository.existsByIdAndActivoTrue(id)) {
            tramite.setId(id);
            tramite.setActivo(true);  // Marcar como activo durante la actualización
            return tramiteRepository.save(tramite);
        } else {
            throw new ResourceNotFoundException("Tramite with ID " + id + " not found");
        }
    }

    public void deleteTramite(Long id) {
        Tramite tramite = tramiteRepository.findByIdAndActivoTrue(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite with ID " + id + " not found"));

        tramite.setActivo(false);  // Marcar como inactivo en lugar de eliminar físicamente
        tramiteRepository.save(tramite);
    }

    public void activateTramite(Long id) {
        Tramite tramite = tramiteRepository.findByIdAndActivoFalse(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tramite with ID " + id + " not found"));

        tramite.setActivo(true);  // Marcar como inactivo en lugar de eliminar físicamente
        tramiteRepository.save(tramite);
    }
    //Eliminación fisica
    public void eliminarTramite(Long id) {
        tramiteRepository.deleteById(id);
    }
}
