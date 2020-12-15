$(document).ready(function() {
    validarFormulario();
});


function validarFormulario(){
    $("#registrar").on('click', function(){

        var usuario = $("#usuario").val();
        var pass = $("#pass").val();

        if(usuario!=''){
            if(usuario=="user"){
                if(pass!=''){
                    if(pass=="pass"){
                        alert('DATOS CORRECTOS!');
                    }else{
                        alert('contraseña no valida');
                    }
                }else{
                    alert('Debe ingresar la contraseña');
                }
            }else{
                alert('usuario no valido');
            }
        }else{
            alert('Ingrese el usuario');  
        }
    })
}