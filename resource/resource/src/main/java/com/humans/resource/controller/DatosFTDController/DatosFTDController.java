package com.humans.resource.controller.DatosFTDController;

import com.humans.resource.entity.DatosFTD.DatosFTD;
import com.humans.resource.service.DatosFTDService.DatosFTDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/datosftd")
@CrossOrigin(origins = "http://localhost:4200")
public class DatosFTDController {

    private DatosFTDService datosFTDService;

    @Autowired
    public DatosFTDController(DatosFTDService datosFTDService) {
        this.datosFTDService = datosFTDService;
    }

    @PostMapping
    public DatosFTD createDatosFTD(@RequestBody DatosFTD datosFTD) {
        return datosFTDService.saveDatosFTD(datosFTD);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getDatosFTDById(@PathVariable Long id) {
        DatosFTD datosFTD = null;
        Map<String, Object> response = new HashMap<>();

        try{
            datosFTD = datosFTDService.getDatosFTDById(id);
        }catch (DataAccessException e){
            response.put("mensaje", "Error al realizar la consulta a la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if(datosFTD == null){
            response.put("mensaje", "el cliente ID ".concat(id.toString().concat(" no existe en la base de datos")));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<DatosFTD>(datosFTD, HttpStatus.OK);
    }

    @GetMapping
    public List<DatosFTD> getAllDatosFTD() {
        return datosFTDService.getAllDatosFTD();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateDatosFTD(@PathVariable Long id, @RequestBody DatosFTD datosFTD) {
        DatosFTD datosFTDActuales = datosFTDService.getDatosFTDById(id);

        Map<String, Object> response = new HashMap<>();

        if (datosFTDActuales == null) {
            response.put("mensaje", "Error: no se puede editar el cliente ID " + id + " no existe en la base de datos");
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }

        try {
            datosFTDActuales.setNombreProyecto(datosFTD.getNombreProyecto());
            datosFTDActuales.setAvanceProyecto(datosFTD.getAvanceProyecto());
            datosFTDActuales.setEvaluacionProyecto(datosFTD.getEvaluacionProyecto());
            datosFTDActuales.setAreaInfotec(datosFTD.getAreaInfotec());
            datosFTDActuales.setTutor(datosFTD.getTutor());
            datosFTDActuales.setBeca(datosFTD.getBeca());
            datosFTDActuales.setFechaIngreso(datosFTD.getFechaIngreso());
            datosFTDActuales.setFechaTermino(datosFTD.getFechaTermino());
            datosFTDActuales.setGrupo(datosFTD.getGrupo());
            datosFTDActuales.setEnlace(datosFTD.getEnlace());
            datosFTDActuales.setMatriculaFTD(datosFTD.getMatriculaFTD());
            datosFTDActuales.setCorreoBecario(datosFTD.getCorreoBecario());
            datosFTDActuales.setCursos(datosFTD.getCursos());

            // Guarda los datos actualizados en la base de datos
            datosFTDService.saveDatosFTD(datosFTDActuales);

            response.put("mensaje", "El cliente ha sido actualizado con éxito!!!");
            response.put("cliente", datosFTDActuales);

            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
        } catch (DataAccessException e) {
            response.put("mensaje", "Error al actualizar la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public void deleteDatosFTD(@PathVariable Long id) {
        DatosFTD datosFTD = datosFTDService.getDatosFTDById(id);
        if (datosFTD != null) {
            datosFTD.setActivo(false);
            datosFTDService.saveDatosFTD(datosFTD);
        }
    }

    @DeleteMapping("/recuperacion/{id}")
    public void recuperarDatosPersonales(@PathVariable Long id){datosFTDService.activateDatosFTD(id);}

    }

