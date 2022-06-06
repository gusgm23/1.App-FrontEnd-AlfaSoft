import { updateSolicitud } from "../service/apiSolicitudAulas"

//!Metodo encargado de reducir la capacidad de una solicitud en la bd
export const reducirCapacidadSolicitud = (solicitud, nuevaCantidad) => {

    const nuevaSolicitud = {
        ...solicitud,
        numeroEstudiantesSolicitud: nuevaCantidad

    }

    updateSolicitud(nuevaSolicitud);

}