

$(document).ready(function(){

    $('#listar').on('click', function(){
        let tabla = document.querySelector('#tabla')
        tabla.innerHTML = '<thead><th>Codigo</th><th>Nombre</th><th>Apellido</th><th>Materias</th><th>Notas</th><th>Juicio</th></thead>';

        $.ajax({
            url:"http://localhost:8080/listarEstudiante",
            type: "GET",
            dataType: "JSON",
            success: function(respuesta){
                console.log(respuesta);

                for(i=0; i <= respuesta.length; i++){

                    tabla.innerHTML += '<tr><td>' + respuesta[i].iDcodigo + '</td><td>' 
                        + respuesta[i].nombreEstu + '</td><td>'
                        + respuesta[i].apellidoEstu + '</td><td>' 
                        + respuesta[i].materiasEstu + '</td><td>' 
                        + respuesta[i].notasEstu + '</td><td>'
                        + respuesta[i].juicio + '</td></tr>' 
                }      
            }
        })
    });

    $('#agregar').on('click', function() {
        let datos = {
            iDcodigo: parseInt($('#idUsuario').val()),
            nombreEstu: $('#nombre').val(),
            apellidoEstu: $('#Apellido').val(),
            materiasEstu: materias = [$('#materia1').val(), $('#materia2').val(), $('#materia3').val()],
            notasEstu: notas = [parseFloat($('#nota1').val()), parseFloat($('#nota2').val()), parseFloat($('#nota3').val())],
        }
        console.log(datos)

        let datosEnvio = JSON.stringify(datos);
    
        $.ajax({
            url: "http://localhost:8080/agregarEstudiante",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            dataType: "JSON",
            success: function(respuesta) {
                alert(respuesta);
            }
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