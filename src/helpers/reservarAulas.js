import { createReserva } from "../service/apiReservaAulas";

export const reservarAulas = ( listaReservas, openModalSuccess, openModalFail) => {

console.log("🚀 ~ file: reservarAulas.js ~ line 4 ~ reservarAulas ~ listaReservas", listaReservas)

    createReserva( listaReservas, openModalSuccess, openModalFail );
    
}