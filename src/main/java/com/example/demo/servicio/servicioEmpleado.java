package com.example.demo.servicio;

import com.example.demo.producto.Empleado;
import java.util.ArrayList;

public class servicioEmpleado {

    ArrayList<Empleado> lista = new ArrayList<>();

    public servicioEmpleado() {
        lista.add(new Empleado(111, "Arturo", "Ignacio", "Jefe", 12000000, new int[]{4, 4, 4, 4, 4}, new int[]{3, 2, 4, 2, 1}, new int[]{2, 3, 4, 2, 4}, 0));
        lista.add(new Empleado(222, "Hector", "Espitia", "Empleado", 16000000, new int[]{1, 4, 3, 4, 3}, new int[]{2, 3, 2, 3, 1}, new int[]{1, 4, 3, 4, 3}, 0));
        lista.add(new Empleado(333, "Juan", "Hernandes", "Empleado", 16000000, new int[]{2, 3, 4, 2, 4}, new int[]{3, 2, 4, 2, 1}, new int[]{1, 1, 1, 1, 1}, 0));
        lista.add(new Empleado(444, "Viviana", "Forero", "Ingeniero", 5000000, new int[]{1, 4, 3, 4, 3}, new int[]{2, 1, 0, 0, 0}, new int[]{1, 4, 3, 4, 3}, 0));
    }

    public ArrayList<Empleado> listar() {
        return lista;
    }

    public String Agregar(Empleado empleado) {
        lista.add(empleado);
        return "Agregado con exito";
    }

    public ArrayList<Empleado> comisionE(String cargoE) {
        int costo_hora = 10000, totalExtra, suma, horasTot;
        Empleado emp = null;

        for (Empleado e : lista) {
            if (e.getCargo().equals(cargoE)) {
                emp = e;
                suma = emp.getHorasfestivas()[0] + emp.getHorasfestivas()[1] + emp.getHorasfestivas()[2] + emp.getHorasfestivas()[3] + emp.getHorasfestivas()[4];
                System.out.println(suma);
                horasTot = suma * costo_hora;
                totalExtra = (emp.getSalario() + (horasTot));
                emp.setTotal(totalExtra);
            }
        }
        return lista;
    }
}