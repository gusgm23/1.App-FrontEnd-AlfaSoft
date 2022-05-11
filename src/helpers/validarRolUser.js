

//Controladores de los campos para roles
export const controlarCampoRol = ( roles='', setStatusInputRoles, setMsjErrorRol ) => {
    
    const tamRoles = roles.length;
    const letras = new RegExp("^[a-zA-Z ]+$");

    if( tamRoles < 2 ) {
        setStatusInputRoles(true);
        setMsjErrorRol('El rol ingresado es demasiado corto');
    }else if( !letras.test(roles) ){
        setStatusInputRoles(true);
        setMsjErrorRol('Ingresar solo letras');
    }else{
        setStatusInputRoles(false);
        setMsjErrorRol('');
    }
}


//Controlar los campos para los usuarios
export const controlarCampoNombre = ( nombreUsuario='', setStatusInputNombre, setMsjErrorNombre ) => {
    const tamNombre = nombreUsuario.length;
    const nom = new RegExp("^[a-zA-Z ]+$");

    if( tamNombre < 3 ){
        setStatusInputNombre(true);
        setMsjErrorNombre('El nombre es demasiado corto');
    }else if( !nom.test(nombreUsuario) ){
        setStatusInputNombre(true);
        setMsjErrorNombre('Los nombres solo contienen letras');
    }else {
        setStatusInputNombre(false);
        setMsjErrorNombre('');
    }
}

export const controlarCampoApellido = ( apellidoUsuario='', setStatusInputApellido, setMsjErrorApellido ) => {
    const tamApellido = apellidoUsuario.length;
    const ape = new RegExp("^[a-zA-Z ]+$");

    if( tamApellido < 4 ){
        setStatusInputApellido(true);
        setMsjErrorApellido('El apellido es demasiado corto');
    }else if( !ape.test(apellidoUsuario) ){
        setStatusInputApellido(true);
        setMsjErrorApellido('Los apellidos solo contienen letras');
    }else {
        setStatusInputApellido(false);
        setMsjErrorApellido('');
    }
}

export const controlarCampoTelefono = ( telefonoUsuario, setStatusInputTelefono, setMsjErrorTelefono ) => {
    
    const tel = new RegExp("^[67]{1}[0-9]{7}$");

    if( !tel.test(telefonoUsuario) ){
        setStatusInputTelefono(true);
        setMsjErrorTelefono('Los numeros de celular empiezan con 6 o 7 y contienen 8 digitos');
    }else {
        setStatusInputTelefono(false);
        setMsjErrorTelefono('');
    }
}

export const controlarCampoDireccion = ( direccionUsuario='', setStatusInputDireccion, setMsjErrorDireccion ) => {
    const tamDir = direccionUsuario.length;

    if( tamDir < 5 ) {
        setStatusInputDireccion(true);
        setMsjErrorDireccion('La direccion es muy corta');
    }else if( tamDir >= 50 ) {
        setStatusInputDireccion(true);
        setMsjErrorDireccion('La direccion es muy larga');
    }else {
        setStatusInputDireccion(false);
        setMsjErrorDireccion('');
    }
}

export const controlarCampoCorreo = ( correoUsuario='', setStatusInputCorreo ,setMsjErrorCorreo ) => {
     const cor = new RegExp('^(.+)@(\\S+)$');
    //const corEst = new RegExp("^[0-9]{9}@(est).(umss).(edu)$");
    //const corDoc = new RegExp("^(.+)@(fcyt).(umss).(edu)$");

    // if( !corEst.test(correoUsuario) ){
        // setStatusInputCorreo(true);
        // setMsjErrorCorreo('Correo invalido. debe contener 9 digitos antes del @, Ejm: xxxxxxxxx@est.umss.edu');
    // }else 
    if( !cor.test(correoUsuario ) ){
        setStatusInputCorreo(true);
        setMsjErrorCorreo('Correo invalido. Ejm: xxxxx@fcyt.umss.edu.bo o xxxxx@est.umss.edu');
    }else {
        setStatusInputCorreo(false);
        setMsjErrorCorreo('');
    }
}