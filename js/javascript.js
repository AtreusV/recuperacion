

$(document).ready(function(){

    $('#listar').on('click', function(){

        let tabla = document.querySelector('#tabla')
        tabla.innerHTML = '<table id="tabla"><tr><th>Cedula</th><th>Nombre</th><th>Apellido</th><th>Cargo</th><th>Salario</th><th>Total</th></tr></table>';
        
        $.ajax({
            url:"http://localhost:8080/listarEmpleado",
            type: "GET",
            dataType: "JSON",
            success: function(respuesta){
                console.log(respuesta)
                for(i=0; i <= respuesta.length; i++){

                    tabla.innerHTML += '<tr><td>' 
                    + respuesta[i].cedula + '</td><td>' 
                    + respuesta[i].nombre + '</td><td>'
                    + respuesta[i].apellido + '</td><td>' 
                    + respuesta[i].Cargo + '</td><td>' 
                    + respuesta[i].salario + '</td><td>'
                    + respuesta[i].total + '</td></tr>' 
                }      
            }
        })
    });

    $('#agregar').on('click', function() {
        let tabla = document.querySelector('#tabla')
        tabla.innerHTML = '<table id="tabla"></table>';
        
        let datos = {
            Cedula: parseInt($('#cedula').val()),
            nombre: $('#nombre').val(),
            apellido: $('#apellido').val(),
            cargo: $('#cargo').val(),
            salario: $('#salario').val(),
            horasExtras: Extras = [0,0,0,0], //parseInt($('#extra1')).val(), parseInt($('#extra2').val()), parseInt($('#extra3').val()), parseInt($('#extra4').val()),parseInt($('#extra5').val())],
            horasfestivas: festivas = [2,2,2,2,2], //parseInt($('#festivas1').val()), parseInt($('#festivas2').val()), parseInt($('#festivas3').val()), parseInt($('#festivas4').val()), parseInt($('#festivas5').val())],
            ventas: venta = [0,0,0,0]
        }
        
        let datosEnvio = JSON.stringify(datos);
        
        $.ajax({
            url: "http://localhost:8080/agregarEmpleado",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            dataType: "JSON",
            success: function(respuesta) {
                alert(respuesta);
            }
        });
        console.log(data)
    });

    $('#consultar').on('click', function() {
        let tabla = document.querySelector('#tabla')
        tabla.innerHTML = '<table id="tabla"></table>';

        let cargo = $('#cargo').val()

        $.ajax({
            url: "http://localhost:8080/comisionEmpleado/"+cargo,
            type: "GET",
            dataType: "JSON",
            //success: function(res) {}
        });
    });
});






































































/*
$('#eliminar').on('click',function(){
    $.ajax({
        url: "http://localhost:8080/eliminarEstudiante",
        type: "DELETE",
        dataType: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            if(respuesta){
                $('#eliminarUsu').append("Usuario eliminado")
            }else{
                $('#eliminarUsu').append("Usuario no eliminado")
            }
        }
    })
    
});


$('#modificar').on('click',function(){

    let datos = {

        codigo: parseInt($('#id').val()),
        notas: [parseFloat($('#N1').val()), parseFloat($('#N2').val()),  parseFloat($('#N3').val())]
    }

    let datosEnvio = JSON.stringify(datos);
    console.log(datosEnvio);
    $.ajax({
        url: "http://localhost:8080/modificarEstudiante",
        type: "POST",
        data: datosEnvio,
        contentType: "application/JSON",
        dataType: "JSON"
    });

});
*/

























































/*
$('#modificar').on('click',function(){
    
    let datos = {
        
        codigo: parseInt($('#id').val()),
        notas: [parseFloat($('#N1').val()), parseFloat($('#N2').val()),  parseFloat($('#N3').val())]
    }
    
    let datosEnvio = JSON.stringify(datos);
    console.log(datosEnvio);
    $.ajax({
        url: "http://localhost:8080/modificarEstudiante",
        type: "POST",
        data: datosEnvio,
        contentType: "application/JSON",
        dataType: "JSON"
    });

});
$('#eliminar').on('click',function(){
    $.ajax({
        url: "http://localhost:8080/eliminarEstudiante",
        type: "DELETE",
        dataType: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            if(respuesta){
                $('#eliminarUsu').append("Usuario eliminado")
            }else{
                $('#eliminarUsu').append("Usuario no eliminado")
            }
        }
    })
    
});
*/