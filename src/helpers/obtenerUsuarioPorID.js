
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

export const obtenerAuxiliaresPorId = ( listaUsuarios=[], idAuxiliar ) => {

    let existeAuxiliar = false;
    let auxiliarEncontrado = '';

    listaUsuarios.forEach( usuario => {
        if(idAuxiliar === 'No asignado'){
            auxiliarEncontrado = idAuxiliar;
        }else{
            if( usuario.id == parseInt(idAuxiliar) && !existeAuxiliar ){
                auxiliarEncontrado = usuario.name + ' ' + usuario.apellido;
                existeAuxiliar = true;
            }
        }
    } )

    return auxiliarEncontrado;

}