package com.humans.resource.repository.DatosPersonalesRepository;

import com.humans.resource.entity.DatosFTD.Beca;
import com.humans.resource.entity.DatosPersonales.DatosPersonales;
import com.humans.resource.entity.security.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DatosPersonalesRepository extends JpaRepository<DatosPersonales, Long> {

    DatosPersonales findByUsername(String username);
}
