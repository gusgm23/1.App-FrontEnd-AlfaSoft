import axios from "axios";
import { baseUrl } from "./apiAulas";

//API para obtener las solicitudes pendientes
export const getSolicitudPendiente = async ( setListaSolicitudPendiente ) => {
    await axios.get(`${baseUrl}/obtenerSolicitudPendiente`)
    .then(response => {
        setListaSolicitudPendiente({
            state: true,
            data: response.data
        });
    })
    .catch(e => {
        console.log(e);
    })
}

export const getSolicitud = async (setListaSolicitud) => {
    await axios.get(`${baseUrl}/obtenerSolicitud`)
        .then(response => {
            setListaSolicitud({
                stateS: true,
                dataS: response.data
            });
        })
        .catch(e => {
            console.log(e);
        })
}

export const getSolicitudId = (id) => {
    return axios.get(`${baseUrl}/obtenerSolicitudId/${id}`);
}

export const createSolicitud = (  
    formValues, 
    materia_id, 
    materiaSolicitud, 
    grupoSolicitud, 
    pendiente='pendiente', 
    openModalSuccess, 
    openModalWarning 
    ) => {
    
    const { nombreDocente, 
            apellidoDocente, 
            cantidadEstudiantes, 
            motivoSolicitud, 
            fechaSolicitud, 
            horaSolicitud, 
            peridoSolicitud
        } = formValues;

    return axios.post(`${baseUrl}/crearSolicitud`, 
    {
        //id:                             `${data.id}`,
        nombreDocenteSolicitud:         `${nombreDocente}`,
        apellidoDocenteSolicitud:       `${apellidoDocente}`,
        numeroEstudiantesSolicitud:     `${cantidadEstudiantes}`,
        motivoSolicitud:                `${motivoSolicitud}`,
        fechaSolicitud:                 `${fechaSolicitud}`,
        horaInicioSolicitud:            `${horaSolicitud}`,
        periodoSolicitud:               `${peridoSolicitud}`,
        estadoSolicitud:                `${pendiente}`,
        materiaSolicitud:               `${materiaSolicitud}`,
        grupoSolicitud:                 `${grupoSolicitud}`,
        materia_id:                     `${materia_id}`
    }
    ).then( (response) => {
        openModalSuccess();
    }).catch((error) => {
        openModalWarning();
    });
}

export const updateSolicitudId = (
    
    formValues,
    materia_id,
    materiaSolicitud,
    grupoSolicitud,
    pendiente='pendiente',
    openModalSuccess,
    openModalWarning, 
    id 
    ) => {
        const {
            nombreDocente, 
            apellidoDocente, 
            cantidadEstudiantes,
            motivoSolicitud, 
            fechaSolicitud, 
            horaSolicitud, 
            peridoSolicitud
        } = formValues;

    return axios.put(`${baseUrl}/actualizarSolicitud/${id}`, 
    {
        id:                             `${id}`,
        nombreDocenteSolicitud:         `${nombreDocente}`,
        apellidoDocenteSolicitud:       `${apellidoDocente}`,
        numeroEstudiantesSolicitud:     `${cantidadEstudiantes}`,
        motivoSolicitud:                `${motivoSolicitud}`,
        fechaSolicitud:                 `${fechaSolicitud}`,
        horaInicioSolicitud:            `${horaSolicitud}`,
        periodoSolicitud:               `${peridoSolicitud}`,
        estadoSolicitud:                `${pendiente}`,
        materiaSolicitud:               `${materiaSolicitud}`,
        grupoSolicitud:                 `${grupoSolicitud}`,
        materia_id:                     `${materia_id}`

    }
    ).then( (response) => {
        openModalSuccess();
    }
    ).catch( (error) => {
        openModalWarning();
    });
}

export const deleteSolicitud = (id) => {
    return axios.delete(`${baseUrl}/eliminarSolicitud/${id}`);
}