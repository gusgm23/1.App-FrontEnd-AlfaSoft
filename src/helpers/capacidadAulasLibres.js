//! Este metodo se encarga que sumar las capacidades de todas las aulas disponibles para la
//! solicitud que se quiere aprobar.
//! Una vez que sume todas las capacidades, comparará si es mayo o igual a la capacidad que requiere la solicitud
//! Si la capacidad sumada es menor a la de la solicitud, se hará un cambio de estado y no se mostrarán
//! aulas libres

export const verificarCapacidad = ( listaAulasLibres=[], capacidadRequerida ) => {
    
    let existeCapacidad = false;
    let capacidadLibre = obtenerCapacidadDisponible( listaAulasLibres );

    if( parseInt(capacidadRequerida) >  capacidadLibre){
        
        existeCapacidad = false;

    }else {
        
        existeCapacidad = true;

    }

    return existeCapacidad;

}

const obtenerCapacidadDisponible = ( listaAulasLibres ) => {

    let capacidadTotal = 0;

    listaAulasLibres.forEach(element => {
        
        capacidadTotal = capacidadTotal + parseInt(element.capacidadAula);

    });

    return capacidadTotal;

}