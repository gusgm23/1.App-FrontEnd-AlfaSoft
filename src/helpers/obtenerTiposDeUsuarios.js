export const obtenerDocentes = (listaUsuarios=[]) => {

    let listaDocentes = [];

    listaUsuarios.forEach(usuario => {
        if( usuario.rol_id == 2 ) {
            listaDocentes.push(usuario);
        }
    })

    return listaDocentes;

}

export const obtenerAuxiliares = (listaUsuarios=[]) => {

    let listaAuxiliares = [];

    listaUsuarios.forEach(usuario => {
        if( usuario.rol_id == 3 ) {
            listaAuxiliares.push(usuario);
        }
    })

    return listaAuxiliares;

}