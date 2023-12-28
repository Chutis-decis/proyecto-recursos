package com.humans.resource.controller.DatosEscolaresController;

import com.humans.resource.entity.DatosEscolares.PlanEducativo;
import com.humans.resource.entity.DatosEscolares.Universidad;
import com.humans.resource.service.DatosEscolaresService.PlanEducativoService;
import com.humans.resource.service.DatosEscolaresService.UniversidadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/plan-educativo")
@CrossOrigin (origins = "http://localhost:4200")
public class PlanEducativoController {

    //********************************* PLAN EDUCATIVO ******************************
    @Autowired
    private PlanEducativoService planEducativoService;

    @GetMapping("")
    public List<PlanEducativo> getAllPlan(){return  planEducativoService.getPlan();}

    @PostMapping("")
    public ResponseEntity<PlanEducativo> addPLan(@RequestBody PlanEducativo planEducativo) {
        PlanEducativo crarPlan = planEducativoService.addPlan(planEducativo);
        return new ResponseEntity<>(crarPlan, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public PlanEducativo actualizarPlan(@PathVariable Long id, @RequestBody  PlanEducativo planEducativo) {
        return planEducativoService.updateplan(id, planEducativo);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        PlanEducativo planEducativo = null;
        Map<String, Object>response = new HashMap<>();

        try {
            planEducativo =planEducativoService.getPlan(id);
        }catch (DataAccessException e){
            //Errores desde el servidor de la bd
            response.put("mensaje", "Error al realizar la consulta en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if(planEducativo == null){
            response.put("mensaje", "La universidad con el ID ".concat(id.toString().concat(" no existe en la base de datos")));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<PlanEducativo>(planEducativo, HttpStatus.OK);
    }

//    @DeleteMapping("/recuperacion/{id}")
//    public ResponseEntity<?> activatePlan(@PathVariable Long id) {
//        Map<String, Object> response = new HashMap<>();
//
//        try {
//            planEducativoService.activatePlan(id);
//        } catch (DataAccessException e) {
//            response.put("message", "Error al realizar la eliminación lógica en la base de datos");
//            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
//            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//
//        response.put("mensaje", "Eliminación lógica exitosa");
//        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
//    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> EliminarPlanEducativo(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            planEducativoService.deletePlanEducativo(id);
        } catch (DataAccessException e) {
            response.put("message", "Error al realizar la eliminación lógica en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "Eliminación lógica exitosa");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }
}