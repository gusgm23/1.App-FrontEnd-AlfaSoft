//! Metodo encargado para poder deshabilitar la solicitud 
//! y guardar las reservas con las aulas ocupadas
export const aprobarSolicitud = ( capacidad ) => {

    if( capacidad == 0 ){

        console.log('se puede terminar el proceso');

    }else{

        console.log('no se puede terminar el proceso')

    }

}

//! Metodo encargado de rechazar la solicitud
export const rechazar = () => {

    console.log('*se deberia rechazar la solicitud*')

}