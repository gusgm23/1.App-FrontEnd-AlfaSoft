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

export const getSolicitudId = async (id, setter) => {
    await axios.get(`${baseUrl}/obtenerSolicitudId/${id}`)
        .then(response => {
            setter(response.data);
        })
        .catch(e => {
            console.log(e);
        })
}

export const createSolicitud = (  
    formValues, 
    materia_id, 
    materiaSolicitud, 
    grupoSolicitud, 
    pendiente='pendiente',
    motivo='ninguno', 
    openModalSuccess, 
    openModalWarning 
    ) => {
    
    const { nombreDocente, 
            apellidoDocente, 
            cantidadEstudiantes, 
            motivoSolicitud, 
            // motivoRechazo,
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
        //nuevo atributo
        motivoRechazo:                  `${motivo}`,
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

export const updateSolicitudId = async (
    
    formValues,
    materia_id,
    materiaSolicitud,
    grupoSolicitud,
    pendiente='pendiente',
    //motivo,
    openModalSuccess,
    openModalWarning, 
    id 
    ) => {
        const {
            nombreDocente, 
            apellidoDocente, 
            cantidadEstudiantes,
            motivoSolicitud,
            motivoRechazo, 
            fechaSolicitud, 
            horaSolicitud, 
            peridoSolicitud
        } = formValues;

    return await axios.put(`${baseUrl}/actualizarSolicitud/${id}`, 
    {
        id:                             `${id}`,
        nombreDocenteSolicitud:         `${nombreDocente}`,
        apellidoDocenteSolicitud:       `${apellidoDocente}`,
        numeroEstudiantesSolicitud:     `${cantidadEstudiantes}`,
        motivoSolicitud:                `${motivoSolicitud}`,
        motivoRechazo:                  `${motivoRechazo}`,

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

//!Endpoint para actualizar estado de una solicitud sin necesidad de mostrar algún modal
export const updateSolicitud = async (solicitud) => {

    const { 
        id, 
        nombreDocenteSolicitud, 
        apellidoDocenteSolicitud, 
        numeroEstudiantesSolicitud, 
        motivoSolicitud,
        motivoRechazo, 
        fechaSolicitud, 
        horaInicioSolicitud, 
        periodoSolicitud, 
        estadoSolicitud, 
        materiaSolicitud, 
        grupoSolicitud, 
        materia_id } = solicitud;

    await axios.put(`${baseUrl}/actualizarSolicitud/${id}`, 
        {
            id:                             `${id}`,
            nombreDocenteSolicitud:         `${nombreDocenteSolicitud}`,
            apellidoDocenteSolicitud:       `${apellidoDocenteSolicitud}`,
            numeroEstudiantesSolicitud:     `${numeroEstudiantesSolicitud}`,
            motivoSolicitud:                `${motivoSolicitud}`,
            motivoRechazo:                   `${motivoRechazo}`,
            fechaSolicitud:                 `${fechaSolicitud}`,
            horaInicioSolicitud:            `${horaInicioSolicitud}`,
            periodoSolicitud:               `${periodoSolicitud}`,
            estadoSolicitud:                `${estadoSolicitud}`,
            materiaSolicitud:               `${materiaSolicitud}`,
            grupoSolicitud:                 `${grupoSolicitud}`,
            materia_id:                     `${materia_id}`

        }
        ).then( (response) => {
            console.log('ok actualizado');
        }
        ).catch( (error) => {
            console.log('error actualizado');
        });

}

export const deleteSolicitud = (id) => {
    return axios.delete(`${baseUrl}/eliminarSolicitud/${id}`);
}