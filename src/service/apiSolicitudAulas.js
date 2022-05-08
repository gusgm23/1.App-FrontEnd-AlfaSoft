import axios from "axios";

export const getSolicitud = async (setListaSolicitud) => {
    await axios.get(`http://127.0.0.1:8000/api/obtenerSolicitud`)
        .then(response => {
            setListaSolicitud({
                state: true,
                data: response.data
            });
        })
        .catch(e => {
            console.log(e);
        })

}

export const getSolicitudId = (id) => {
    return axios.get(`http://127.0.0.1:8000/api/obtenerSolicitudId/${id}`);
}

export const createSolicitud = (  formValues , materia_id, materiaSolicitud, grupoSolicitud, pendiente='pendiente', openModalSuccess, openModalWarning) => {
    
    const { nombreDocente, apellidoDocente, cantidadEstudiantes, motivoSolicitud, fechaSolicitud, horaSolicitud, peridoSolicitud} = formValues;

    
    return axios.post(`http://127.0.0.1:8000/api/crearSolicitud`, 
    
    {
        //id:                             `${data.id}`,
        nombreDocenteSolicitud:         `${nombreDocente}`,
        apellidoDocenteSolicitud:       `${apellidoDocente}`,
        numeroEstudiantesSolicitud:     `${cantidadEstudiantes}`,
        motivoSolicitud:                `${motivoSolicitud}`,
        fechaSolicitud:                 `${fechaSolicitud}`,
        horaInicioSolicitud:            `${horaSolicitud}`,
        //horaFinSolicitud:               `${}`,
        periodoSolicitud:               `${peridoSolicitud}`,
        estadoSolicitud:                `${pendiente}`,
        materiaSolicitud:               `${materiaSolicitud}`,
        grupoSolicitud:                 `${grupoSolicitud}`,
        materia_id:                     `${materia_id}`
        //nombreMateria:                  `${data.nombreMateria}`,
        //grupoMateria:                   `${data.grupoMateria}`
    }
    ).then( (response) => {
        openModalSuccess();
    }).catch((error) => {
        openModalWarning();
    });
}

export const updateSolicitudId = (data, id) => {
    return axios.put(`http://127.0.0.1:8000/api/actualizarSolicitud/${id}`, {
        id: `${data.id}`,
        nombreDocenteSolicitud: `${data.nombreDocenteSolicitud}`,
        apellidoDocenteSolicitud: `${data.apellidoDocenteSolicitud}`,
        numeroEstudiantesSolicitud: `${data.numeroEstudiantesSolicitud}`,
        motivoSolicitud: `${data.motivoSolicitud}`,
        fechaSolicitud: `${data.fechaSolicitud}`,
        horaInicioSolicitud: `${data.horaInicioSolicitud}`,
        horaFinSolicitud: `${data.horaFinSolicitud}`,
        periodoSolicitud: `${data.periodoSolicitud}`,
        estadoSolicitud: `${data.estadoSolicitud}`,
        materia_id: `${data.materia_id}`
            //nombreMateria:                  `${data.nombreMateria}`,
            //grupoMateria:                   `${data.grupoMateria}`
    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });
}

export const deleteSolicitud = (id) => {
    return axios.delete(`https://reserva-de-aulas-backend.herokuapp.com/api/eliminarSolicitud/${id}`);
}