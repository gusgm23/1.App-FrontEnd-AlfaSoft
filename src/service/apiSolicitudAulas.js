import axios from "axios";

export const getSolicitud = () => {
    return axios.get(`http://127.0.0.1:8000/api/obtenerSolicitud`);
}

export const getSolicitudId = (id) => {
    return axios.get(`http://127.0.0.1:8000/api/obtenerSolicitudId/${id}`);
}

export const createSolicitud = (data) => {
    return axios.post(`http://127.0.0.1:8000/api/crearSolicitud`, 
    {
        id:                             `${data.id}`,
        nombreDocenteSolicitud:         `${data.nombreDocenteSolicitud}`,
        apellidoDocenteSolicitud:       `${data.apellidoDocenteSolicitud}`,
        numeroEstudiantesSolicitud:     `${data.numeroEstudiantesSolicitud}`,
        motivoSolicitud:                `${data.motivoSolicitud}`,
        fechaSolicitud:                 `${data.fechaSolicitud}`,
        horaInicioSolicitud:            `${data.horaInicioSolicitud}`,
        horaFinSolicitud:               `${data.horaFinSolicitud}`,
        periodoSolicitud:               `${data.periodoSolicitud}`,
        estadoSolicitud:                `${data.estadoSolicitud}`,
        nombreMateria:                  `${data.nombreMateria}`,
        grupoMateria:                   `${data.grupoMateria}`
    }
    ).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

export const updateSolicitudId = (data, id) => {
    return axios.put(`http://127.0.0.1:8000/api/actualizarSolicitud/${id}`,
    {
        id:                             `${data.id}`,
        nombreDocenteSolicitud:         `${data.nombreDocenteSolicitud}`,
        apellidoDocenteSolicitud:       `${data.apellidoDocenteSolicitud}`,
        numeroEstudiantesSolicitud:     `${data.numeroEstudiantesSolicitud}`,
        motivoSolicitud:                `${data.motivoSolicitud}`,
        fechaSolicitud:                 `${data.fechaSolicitud}`,
        horaInicioSolicitud:            `${data.horaInicioSolicitud}`,
        horaFinSolicitud:               `${data.horaFinSolicitud}`,
        periodoSolicitud:               `${data.periodoSolicitud}`,
        estadoSolicitud:                `${data.estadoSolicitud}`,
        nombreMateria:                  `${data.nombreMateria}`,
        grupoMateria:                   `${data.grupoMateria}`
    }
    ).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

export const deleteSolicitud = (id) => {
    return axios.delete(`http://127.0.0.1:8000/api/eliminarSolicitud/${id}`);
}