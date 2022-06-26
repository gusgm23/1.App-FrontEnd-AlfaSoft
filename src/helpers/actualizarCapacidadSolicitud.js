import { updateSolicitud } from "../service/apiSolicitudAulas"

//!Metodo encargado de reducir la capacidad de una solicitud en la bd
export const reducirCapacidadSolicitud = (solicitud, nuevaCantidad) => {
    if( nuevaCantidad > 0){
        
        const nuevaSolicitud = {
            ...solicitud,
            numeroEstudiantesSolicitud: nuevaCantidad
    
        }
    
        updateSolicitud(nuevaSolicitud);

    }else{
        const nuevaSolicitud = {
            ...solicitud,
            numeroEstudiantesSolicitud: 0,
            estadoSolicitud: 'Aprobado'
        }
    
        updateSolicitud(nuevaSolicitud);
    }

}