import { cambiarEstadoSolicitud } from "./cambiarEstadoSolicitud";

export const cambiarCapacidadSolicitud = ( capacidadSolicitud, capacidadAula, modificarCapacidad, solicitud ) => {

    let suma = parseInt(capacidadSolicitud) + parseInt(capacidadAula);

    if( suma >= solicitud.numeroEstudiantesSolicitud ){

        modificarCapacidad( suma );
        
        //!llamada a metodo encargado de cambiar el estado de una solicitud a "APROBADA"
        cambiarEstadoSolicitud(solicitud);

    }else{
        modificarCapacidad( suma );
    }

}