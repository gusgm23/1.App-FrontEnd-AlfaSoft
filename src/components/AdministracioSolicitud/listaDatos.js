export const arregloDatosSolicitud = ( item ) => {
    return [{
        campo: 'Materia',
        valor: 'Algebra II'
    }, {
        campo: 'Docente',
        valor: item.nombreDocenteSolicitud
    }, {
        campo: 'Número de estudiantes',
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