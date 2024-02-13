package com.humans.resource.service.DatosPersonalesService;

import com.humans.resource.entity.DatosPersonales.DatosPersonales;
import com.humans.resource.repository.DatosPersonalesRepository.DatosPersonalesRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private DatosPersonalesRepository datosPersonalesRepository;

    public boolean autenticarUsuario(String username, String password) {
        DatosPersonales usuario = datosPersonalesRepository.findByUsername(username);
        if (usuario != null) {
            // Verificar la contraseña utilizando BCrypt
            return BCrypt.checkpw(password, usuario.getPassword());
        }
        return false;
    }
}
