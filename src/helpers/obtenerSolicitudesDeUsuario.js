//!Metodo encargado de devolver las solicitudes de un usuario que se encuentren en un estado de pendiente
export const getSolicitudesDeUsuario = (listaSolicitudes, nombreUsuario, apellidoUsuario) => {

    const dataSolicitud = listaSolicitudes.filter(
        solicitud => solicitud.nombreDocenteSolicitud === nombreUsuario && solicitud.apellidoDocenteSolicitud === apellidoUsuario && solicitud.estadoSolicitud === 'pendiente'
    );
    return dataSolicitud;

}