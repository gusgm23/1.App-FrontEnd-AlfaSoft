export const buscarRol = ( data=[], id ) => {
    let resp = false
    let rolEncontrado = []

    data.forEach( rol => {
        if(rol.id === id){
            resp = true;
            rolEncontrado = rol
        }
    } )

    return { resp, rolEncontrado }

}