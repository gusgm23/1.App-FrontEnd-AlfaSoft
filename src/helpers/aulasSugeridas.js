
export const obtenerAulasSugeridas = ( listaAulas=[], infoSolicitud ) => {

    //!Variables para poder filtrar aulas según los valores dadtos
    //?Si la solicitud requiere 5 espacios de un aula, entonces se recomendará aulas entre 0 - 50
    //? si la solicitud requiere 55 espacios de un aula, entonces se recomendará aulas entre 50 - 100
    //? se contemplarán solo tres intervalos de sugerencia, 0-50, 51-100, 100->
    let limiteSuperior = 0;
    let limiteInferior = 0;

    const cantidadRequerida = parseInt(infoSolicitud.numeroEstudiantesSolicitud);

    if( cantidadRequerida > 0 && cantidadRequerida <= 50 ){
        limiteInferior = 0;
        limiteSuperior = 50;
    }else if( cantidadRequerida > 50 && cantidadRequerida <= 100 ){
        limiteInferior = 50;
        limiteSuperior = 100;
    }else{
        limiteInferior = 100;
        limiteSuperior = 'inf';
    }

    return filtrarAulas(listaAulas, limiteInferior, limiteSuperior);

}

const filtrarAulas = ( listaAulas=[], limInf, limSup ) => {

    const aulasFiltradas = [];

    listaAulas.forEach( aula => {
        if(limInf == 100){
            if(aula.capacidadAula >= limInf){
                aulasFiltradas.push(aula);
            }
        }else{
            if(aula.capacidadAula >= limInf && aula.capacidadAula <= limSup){
                aulasFiltradas.push(aula);
            }
        }
    } )

    return aulasFiltradas;

}