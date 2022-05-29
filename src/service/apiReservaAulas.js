import axios from "axios";
import { baseUrl } from "./apiAulas";
import { quitarAulaTabla } from "../helpers/quitarAulaTabla";

//API para obtener las reservas de las aulas
export const getReserva = async ( setListaReserva ) => {
    await axios.get(`${baseUrl}/obtenerAulasReservadas`)
    .then( response => {
        setListaReserva({
            stateReserva: true,
            dataReserva: response.data
        });
    }) 
    .catch( e => {
        console.log(e);
    })
}

export const getReservaId = async (id) => {
    await axios.get(`${baseUrl}/obtenerAulasReservadasId/${id}`);
}

export const createReserva = async ( data , openModalSuccess, openModalWarning, arreglo ) => {
    await axios.post(`${baseUrl}/crearAulasReservadas`,
    {
        fechaReserva:           `${data.fechaReserv}`,
        horaInicioReserva:      `${data.horaIni}`,
        horaFinalReserva:       `${data.horaFin}`,
        aula_id:                `${data.idAula}`  
    })
    .then(( response ) => {
        openModalSuccess();
        quitarAulaTabla(arreglo[0], arreglo[1], arreglo[2]);
        return true;
    })
    .catch(( error ) => {
        openModalWarning();
        return false
    });
}

export const updateReserva = ({ data }, aula_id, openModalSuccess, openModalWarning, id ) => {
    return axios.put(`${baseUrl}/actualizarAulasReservadas/${id}`,
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
    return axios.delete(`${baseUrl}/eliminarAulasReservadas/${id}`);
}