export const obtenerUsuariosPorId = (listaUsuarios=[], idDocente) => {

    let existeDocente = false;

    let usuarioEncontrado= 'Dato de Prueba';

    listaUsuarios.forEach(usuario => {
        if(usuario.id == parseInt(idDocente) && !existeDocente){
            usuarioEncontrado = usuario.name + ' ' + usuario.apellido;
            existeDocente = true;
        }
    })

    return usuarioEncontrado;
}