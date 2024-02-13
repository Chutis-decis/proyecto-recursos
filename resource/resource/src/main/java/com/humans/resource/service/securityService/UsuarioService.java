package com.humans.resource.service.securityService;


import com.humans.resource.entity.DatosPersonales.DatosPersonales;
import com.humans.resource.entity.security.Usuario;
import com.humans.resource.repository.DatosPersonalesRepository.DatosPersonalesRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    private static final Logger logger = LoggerFactory.getLogger(UsuarioService.class);
    @Autowired
    private DatosPersonalesRepository datosPersonalesRepository;

    @Autowired
    private PasswordEncoderService passwordEncoder;

    public DatosPersonales actualizarDatosPersonales(Long id, DatosPersonales datosActualizados) {
        DatosPersonales datosPersonales = datosPersonalesRepository.findById(id).orElse(null);
        if (datosPersonales != null) {
            // Actualiza otros campos de acuerdo a tu modelo
            datosPersonales.setUsername(datosActualizados.getUsername());
            datosPersonales.setPassword(passwordEncoder.encode(datosActualizados.getPassword()));
            return datosPersonalesRepository.save(datosPersonales);
        }
        return null;
    }

    public boolean validarCredenciales(String username, String password) {
        DatosPersonales usuario = datosPersonalesRepository.findByUsername(username);

        if (usuario != null) {
            boolean valido = false;
            System.out.println("Password: " + password + " Usuario: " + usuario);
            logger.debug("Contraseña ingresada por el usuario: {}", password);
            logger.debug("Contraseña almacenada en la base de datos: {}", usuario.getPassword());
            valido =  passwordEncoder.matches(password, usuario.getPassword());
            logger.debug("Resultado de la comparación de contraseñas: {}", valido);
            return valido;
        }

        return false;
    }
}
