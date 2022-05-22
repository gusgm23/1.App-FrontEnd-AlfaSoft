export const setCapacidadSolicitud = ( capacidadSolicitud, capacidadAula, modificarCapacidad ) => {

    let resta = capacidadSolicitud - capacidadAula;

    if( resta < 0 ){
        modificarCapacidad( 0 );
    }else{
        modificarCapacidad( resta );
    }

}