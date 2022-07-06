import { obtenerNombreAulas } from "./obtenerNombredeAulas";


export const obtenerReservasDeUsuario = (listaReservas=[], solicitud, listaAulas=[]) => {
    let reservaDeUsuario = [];
    let reservaAula = {
        nombreDocente: '',
        materiaDocente: '',
        grupoMateria: '',
        cantidadEstudiante: '',
        nombreAula: '',
        capacidadAula: '',
        fechaReserva: '',
        horaInicio: '',
        horaFinal: '',
        periodo:'',
        asignado: ''
    }
    listaReservas.forEach(reserva => {
        if(reserva.idSolicitud == parseInt(solicitud.id)){
            const datosAula = obtenerNombreAulas(listaAulas, reserva.aula_id)

            reservaAula = {
                nombreDocente: solicitud.nombreDocenteSolicitud + ' ' + solicitud.apellidoDocenteSolicitud,
                materiaDocente: solicitud.materiaSolicitud,
                grupoMateria: solicitud.grupoSolicitud,
                cantidadEstudiante: solicitud.numeroEstudiantesSolicitud,
                nombreAula: datosAula.nombreAula,
                capacidadAula: datosAula.capacidad,
                fechaReserva: reserva.fechaReserva,
                horaInicio: reserva.horaInicioReserva,
                horaFinal: reserva.horaFinalReserva,
                periodo: solicitud.periodoSolicitud,
                asignado: solicitud.cantidadEstudiantesAsignada
            }
            reservaDeUsuario.push(reservaAula)
        }
    })
    return reservaDeUsuario;
}