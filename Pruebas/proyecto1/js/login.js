$(document).ready(function() {
    validarFormulario();
});


function validarFormulario(){
    $("#registrar").on('click', function(){

        var usuario = $("#usuario").val();
        var pass = $("#pass").val();

        if(usuario=="user"){
            if(pass=="pass"){
                alert('formulario valido');
            }else{
                alert('contraseña no valida');
            }
        }else{
            alert('usuario no valido');
        }
    })
}