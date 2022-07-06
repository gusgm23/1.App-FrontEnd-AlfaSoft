
export const obtenerAulasSugeridas = ( listaAulas=[], infoSolicitud, setExisteSugerencias ) => {

    const cantidadRequerida = parseInt(infoSolicitud.numeroEstudiantesSolicitud);
    let listaSugerida = [];

    listaAulas.forEach( aula => {
        if(parseInt(aula.capacidadAula) == cantidadRequerida) {
            listaSugerida.push(aula)
        }
    } )

    if(listaSugerida.length == 0){
        setExisteSugerencias(false);
    }

    return listaSugerida;
}

