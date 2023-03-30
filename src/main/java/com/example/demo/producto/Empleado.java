package com.example.demo.producto;

public class Empleado {
    public int Cedula;
    public String nombre;
    public String apellido;
    public String Cargo;
    public int salario;
    public int[] horasExtras;
    public int[] horasfestivas;
    public int[] ventas;
    public int total;

    public Empleado(int cedula, String nombre, String apellido, String cargo, int salario, int[] horasExtras, int[] horasfestivas, int[] ventas, int total) {
        Cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        Cargo = cargo;
        this.salario = salario;
        this.horasExtras = horasExtras;
        this.horasfestivas = horasfestivas;
        this.ventas = ventas;
        this.total = total;
    }

    public int getCedula() {
        return Cedula;
    }

    public void setCedula(int cedula) {
        Cedula = cedula;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getCargo() {
        return Cargo;
    }

    public void setCargo(String cargo) {
        Cargo = cargo;
    }

    public int getSalario() {
        return salario;
    }

    public void setSalario(int salario) {
        this.salario = salario;
    }

    public int[] getHorasExtras() {
        return horasExtras;
    }

    public void setHorasExtras(int[] horasExtras) {
        this.horasExtras = horasExtras;
    }

    public int[] getHorasfestivas() {
        return horasfestivas;
    }

    public void setHorasfestivas(int[] horasfestivas) {
        this.horasfestivas = horasfestivas;
    }

    public int[] getVentas() {
        return ventas;
    }

    public void setVentas(int[] ventas) {
        this.ventas = ventas;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }
}
