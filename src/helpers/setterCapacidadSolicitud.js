import { cambiarEstadoSolicitud } from "./cambiarEstadoSolicitud";

export const cambiarCapacidadSolicitud = ( capacidadSolicitud, capacidadAula, modificarCapacidad, solicitud ) => {

    let resta = capacidadSolicitud - capacidadAula;

    if( resta < 0 ){

        modificarCapacidad( 0 );
        
        //!llamada a metodo encargado de cambiar el estado de una solicitud a "APROBADA"
        cambiarEstadoSolicitud(solicitud);

    }else{
        modificarCapacidad( resta );
    }

}