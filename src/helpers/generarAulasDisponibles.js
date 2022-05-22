export const generarAulasDisponibles = ( listaReservas=[], listaAulas, horaIniSoli, fechaSoli, setAulasLibres ) => {
    
    let listaAulasOcupadas = obtenerAulasOcupadas( listaReservas, horaIniSoli, fechaSoli );
    
    let listaAulasLibres = obtenerAulasLibres( listaAulasOcupadas, listaAulas );

    setAulasLibres(listaAulasLibres);

}

const obtenerAulasOcupadas = ( listaReservas=[], horaIniSoli, fechaSoli ) => {

    let listaAulasOcupadas = [];

    listaReservas.forEach(element => {
        if( element.fechaReserva === fechaSoli){
            if( element.horaInicioReserva === horaIniSoli ){

                listaAulasOcupadas.push( element.aula_id );

            }
        }
    });

    return listaAulasOcupadas;

}

const obtenerAulasLibres = ( listaOcupados=[], listaAulas=[] ) => {

    let listaAulasLibres = [];

    
    listaAulas.forEach( element => {
        
        if( !listaOcupados.includes(element.id) && element.habilitacionAula != 'Inhabilitado'){
            listaAulasLibres.push(element);
        }

    } )

    return listaAulasLibres;

}