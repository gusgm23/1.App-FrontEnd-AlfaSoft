

export const obtenerNombreAulas = (listaAulas=[], idAula) => {
    let nombreAulasReserva = {
        nombreAula: '',
        capacidad: ''
    }
    listaAulas.forEach(aula => {
        if(aula.id == parseInt(idAula)){
            nombreAulasReserva = {
                nombreAula: aula.nombreAula,
                capacidad: aula.capacidadAula
            }
        }
    })
    return nombreAulasReserva;
}