import { updateSolicitud } from "../service/apiSolicitudAulas";

//! Metodo para cambiar estado de una solicitud atendida
export const cambiarEstadoSolicitud = ( solicitud ) => {
    
    let solicitudActualizada = {
        ...solicitud,
        estadoSolicitud: 'Aprobado'
    };
    
    updateSolicitud(solicitudActualizada);
    
}