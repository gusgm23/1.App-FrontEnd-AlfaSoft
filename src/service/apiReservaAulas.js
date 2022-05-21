import axios from "axios";

//API para obtener las reservas de las aulas
export const getReserva = async ( setListaReserva ) => {
    await axios.get(`http://127.0.0.1:8000/api/obtenerAulasReservadas`)
    .then( response => {
        setListaReserva({
            state: true,
            data: response.data
        });
    }) 
    .catch( e => {
        console.log(e);
    })
}

export const getReservaId = async (id) => {
    await axios.get(`http://127.0.0.1:8000/api/obtenerAulasReservadasId/${id}`);
}

export const createReserva = ({ data }, aula_id, openModalSuccess, openModalWarning ) => {
    return axios.post(`http://127.0.0.1:8000/api/crearAulasReservadas`,
    {
        fechaReserva:           `${data.fechaReserva}`,
        horaInicioReserva:      `${data.horaInicioReserva}`,
        horaFinalReserva:       `${data.horaFinalReserva}`,
        aula_id:                `${aula_id}`  
    })
    .then(( response ) => {
        openModalSuccess();
    })
    .catch(( error ) => {
        openModalWarning();
    });
}

export const updateReserva = ({ data }, aula_id, openModalSuccess, openModalWarning, id ) => {
    return axios.put(`http://127.0.0.1:8000/api/actualizarAulasReservadas/${id}`,
    {
        fechaReserva:           `${data.fechaReserva}`,
        horaInicioReserva:      `${data.horaInicioReserva}`,
        horaFinalReserva:       `${data.horaFinalReserva}`,
        aula_id:                `${aula_id}`  
    })
    .then(( response ) => {
        openModalSuccess();
    })
    .catch(( error ) => {
        openModalWarning();
    });
}

export const deleteReserva = (id) => {
    return axios.delete(`http://127.0.0.1:8000/api/eliminarAulasReservadas/${id}`);
}