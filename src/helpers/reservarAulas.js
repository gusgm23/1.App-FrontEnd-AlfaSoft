import { createReserva } from "../service/apiReservaAulas";

export const reservarAulas = ( listaReservas, openModalSuccess, openModalFail) => {

    createReserva( listaReservas[0], openModalSuccess, openModalFail );
    
}