export const obtenerMaterias = (listaMaterias=[], listaGrupos=[], idDocente) => {

    let listaGrupoDocentes = obtenerGrupoDocente( listaGrupos, idDocente);
    let listaNombresMaterias = obtenerNombresMaterias( listaMaterias, listaGrupoDocentes);

    let resultado = listaNombresMaterias.filter((item, index) => {
        return listaNombresMaterias.indexOf(item) === index;
    })

    return resultado;
}

const obtenerGrupoDocente = ( listaGrupos=[], idDocente) => {
    let gruposDocente = [];

    listaGrupos.filter(grupo => {
            if(grupo.idDocente === idDocente.toString()){
                gruposDocente.push(grupo);
            } else if( grupo.idAuxiliar.localeCompare(idDocente) == 0){
                gruposDocente.push(grupo);
            }
        }) 
    return gruposDocente;
}

const obtenerNombresMaterias = ( listaMaterias=[], listaGrupos=[]) => {
    let nombresMaterias = [];

    listaGrupos.filter(grupo => {
            listaMaterias.filter(materia => {
                if(grupo.materia_id === materia.id){
                    nombresMaterias.push(materia.nombreMateria);
                }
            }) 
        }) 
    return nombresMaterias;
}



export const obtenerGrupos = (listaGrupos=[], listaMaterias=[], nombreMateria, idDocente) => {
    let gruposDocente = obtenerGrupoDocente( listaGrupos, idDocente);
    let idMateriaDocente = obtenerIdMateria( listaMaterias, nombreMateria);
    let listaFiltradaGrupos = filtrarGruposPorIdMateria( gruposDocente, idMateriaDocente);

    return listaFiltradaGrupos;
}

const obtenerIdMateria = ( listaMaterias=[], nombreMateria) => {

    let idMateria = '';

    listaMaterias.filter(materia => {
            if(materia.nombreMateria === nombreMateria){
                idMateria = materia.id;
            }
        }) 
    return idMateria;
}

const filtrarGruposPorIdMateria = ( listaGrupos=[], idMateria='0') => {
    let gruposMateria = [];

    listaGrupos.filter(grupo => {
            if(grupo.materia_id == parseInt(idMateria)){
                gruposMateria.push(grupo);
            }
        }) 
    return gruposMateria;
}