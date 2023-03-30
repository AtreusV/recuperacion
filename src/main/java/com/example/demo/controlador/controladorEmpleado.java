package com.example.demo.controlador;


import com.example.demo.producto.Empleado;
import com.example.demo.servicio.servicioEmpleado;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@CrossOrigin(origins = "*", maxAge = 3600)

@RestController
public class controladorEmpleado {

    servicioEmpleado servicio = new servicioEmpleado();

    @GetMapping("/listarEmpleado")
    public ArrayList<Empleado> listarEmpleado() {
        return servicio.listar();
    }

    @PostMapping("/agregarEmpleado")
    public String agregar(@RequestBody Empleado empleado){
        return servicio.Agregar(empleado);
    }

    @GetMapping("/comisionEmpleado/{cargo}")
    public ArrayList<Empleado> comisionEmpleado(@PathVariable ("cargo") String cargoE){
        return servicio.comisionE(cargoE);
    }
}
