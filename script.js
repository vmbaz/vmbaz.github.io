swal('Bienvenido!!', '', 'success');


function GuardarDatos() {
    var txtNombre = document.getElementById('txtNombre');
    var txtemail = document.getElementById('txtemail');
    var txtDescripcion = document.getElementById('txtDescripcion');

    if (txtNombre.value == '') {
        swal('El nombre es requerido!')
        return false;
    }

    if (txtemail.value === '') {
        swal('El email es requerido !')
        return false;
    }

   if (txtDescripcion.value === '') {
        swal('deja tu consulta aqui!')
        return false;
    } else if (txtDescripcion.value.length > 100) {
        swal('no puedo escribir mas de 100 caracteres');
        return false;
    }

    swal('Consulta registada con Exito !!');

    limpiarCampos();

}

function limpiarCampos(){
    txtDescripcion.value="";
    txtNombre.value="";
    txtemail.value="";
}
