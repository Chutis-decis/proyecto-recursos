package com.humans.resource.service.securityService;


import com.humans.resource.entity.security.Usuario;
import com.humans.resource.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoderService passwordEncoder;

    public Usuario registrarUsuario(String username, String password) {
        Usuario nuevoUsuario = new Usuario();
        nuevoUsuario.setUsername(username);
        nuevoUsuario.setPassword(passwordEncoder.encode(password));
        return usuarioRepository.save(nuevoUsuario);
    }

    public boolean validarCredenciales(String username, String password) {
        Usuario usuario = usuarioRepository.findByUsername(username);

        if (usuario != null) {
            boolean valido = false;
            valido =  passwordEncoder.matches(password, usuario.getPassword());
            return valido;
        }

        return false;
    }
}
