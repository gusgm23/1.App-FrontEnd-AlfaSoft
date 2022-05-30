export const arregloDatosSolicitud = ( item ) => {
    return [{
        campo: 'Materia',
        valor: item.materiaSolicitud
    }, {
        campo: 'Docente',
        valor: `${item.nombreDocenteSolicitud} ${item.apellidoDocenteSolicitud}`
    }, {
        campo: 'Nro estudiantes',
        valor: item.numeroEstudiantesSolicitud
    }, {
        campo: 'Motivo',
        valor: item.motivoSolicitud
    }, {
        campo: 'Fecha',
        valor: item.fechaSolicitud
    }, {
        campo: 'Hora',
        valor: item.horaInicioSolicitud
    }, {
        campo: 'Periodos',
        valor: item.periodoSolicitud
    }]
}