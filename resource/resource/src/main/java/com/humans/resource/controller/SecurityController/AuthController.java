package com.humans.resource.controller.SecurityController;

import com.humans.resource.entity.DatosPersonales.DatosPersonales;
import com.humans.resource.service.DatosPersonalesService.AuthService;
import com.humans.resource.service.securityService.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {
    @Autowired
    private UsuarioService usuarioService;

    @PutMapping("/registro/{id}")
    public String registro(@PathVariable Long id, @RequestBody DatosPersonales datosActualizados) {
        usuarioService.actualizarDatosPersonales(id, datosActualizados);
        return "Usuario registrado exitosamente.";
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String username, @RequestParam String password) {
        Map<String, Object> response = new HashMap<>();
        if (usuarioService.validarCredenciales(username, password)) {
            response.put("mensaje", "Inicio de sesión exitoso.");
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
        } else {
            response.put("mensaje", "Credenciales incorrectas.");
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.UNAUTHORIZED);

        }
    }
}
