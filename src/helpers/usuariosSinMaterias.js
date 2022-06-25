export const obtenerUsuariosSinMaterias = ( listaGrupos=[], listaUsuarios=[] ) => {

    const usuariosConMateria = obtenerUsuariosConMaterias(listaGrupos);
    const usuariosSinMaterias = filtrarUsuariosSinMaterias( usuariosConMateria, listaUsuarios );
    
    return usuariosSinMaterias;
}

const obtenerUsuariosConMaterias = ( listaGrupos=[] ) => {

    let listaDocentesConGrupo = [];

    listaGrupos.forEach( grupo => {
        if( grupo.idAuxiliar != 'No asignado' ){
            listaDocentesConGrupo.push(grupo.idAuxiliar);
            listaDocentesConGrupo.push(grupo.idDocente);
        }else{
            listaDocentesConGrupo.push(grupo.idDocente);
        }
    } )

    return listaDocentesConGrupo;

}

const filtrarUsuariosSinMaterias = ( listaUsuariosConMateria=[], listaUsuarios=[] ) => {

    let listaUsuariosSinMat = [];

    listaUsuarios.forEach( usuario => {
        if(!listaUsuariosConMateria.includes(String(usuario.id)) && usuario.rol_id != 1){
            listaUsuariosSinMat.push(usuario);
        }
    } )

    return listaUsuariosSinMat;

}