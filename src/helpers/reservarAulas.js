import { createReserva } from "../service/apiReservaAulas";

export const reservarAulas = ( listaReservas, openModalSuccess, openModalFail, datos) => {

    createReserva( listaReservas[0], openModalSuccess, openModalFail, datos );
    
}