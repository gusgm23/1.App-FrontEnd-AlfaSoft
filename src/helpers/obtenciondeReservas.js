import { obtenerNombreAulas } from "./obtenerNombredeAulas";


export const obtenerReservasDeUsuario = (listaReservas=[], idSolicitud, listaAulas=[]) => {
    let reservaDeUsuario = [];
    let reservaAula = {
        nomreDocente: '',
        materiaDocente: '',
        grupoMateria: '',
        cantidadEstudiante: '',
        nombreAula: '',
        capacidadAula: '',
        fechaReserva: '',
        horaInicio: '',
        horaFinal: ''
    }
    listaReservas.forEach(reserva => {
        if(reserva.idSolicitud == parseInt(idSolicitud)){
            const datosAula = obtenerNombreAulas(listaAulas, reserva.aula_id)

            reservaAula = {
                nombreDocente: '',
                materiaDocente: '',
                grupoMateria: '',
                cantidadEstudiante: '',
                nombreAula: datosAula.nombreAula,
                capacidadAula: datosAula.capacidad,
                fechaReserva: reserva.fechaReserva,
                horaInicio: reserva.horaInicioReserva,
                horaFinal: reserva.horaFinalReserva,
            }
            reservaDeUsuario.push(reservaAula, 'Prueba')
        }
    })
    return reservaDeUsuario;
}