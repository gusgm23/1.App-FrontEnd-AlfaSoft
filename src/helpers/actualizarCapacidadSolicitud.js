import { updateSolicitud } from "../service/apiSolicitudAulas"

//!Metodo encargado de reducir la capacidad de una solicitud en la bd
export const reducirCapacidadSolicitud = (solicitud, nuevaCantidad) => {
    
    if( nuevaCantidad < solicitud.numeroEstudiantesSolicitud){
        
        const nuevaSolicitud = {
            ...solicitud,
            cantidadEstudiantesAsignada: nuevaCantidad
    
        }
    
        updateSolicitud(nuevaSolicitud);

    }else{
        const nuevaSolicitud = {
            ...solicitud,
            estadoSolicitud: 'Aprobado',
            cantidadEstudiantesAsignada: nuevaCantidad
        }
    
        updateSolicitud(nuevaSolicitud);
    }

}