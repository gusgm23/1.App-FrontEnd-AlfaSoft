export const getHoraFin = ( hora, minuto, periodo ) => {

    let horaPeriodo = periodoXHora(periodo);
    
    let horaFin = calcularHoraFin(hora,minuto, horaPeriodo[0], horaPeriodo[1])
    
    return horaFin[0] + ':' + horaFin[1]
}

const periodoXHora = (periodo) => {
    let hora = 0;
    let minuto = 0;
    for (let index = 0; index < periodo; index++) {
        for (let index = 0; index < 3; index++) {
            minuto = minuto + 30;
            if( minuto == 60 ){
                hora = hora +1;
                minuto = 0;
            }
        }
    }

    return [hora, minuto]
}

const calcularHoraFin = ( hora, minuto, periodoHora, periodoMinuto ) => {

    let horaNueva = parseInt(hora) + parseInt(periodoHora);
    let minutoNuevo = parseInt(minuto) + parseInt(periodoMinuto);

    if( minutoNuevo > 60 ){

        horaNueva = horaNueva+1;
        minutoNuevo = minutoNuevo - 60;

    }


    return [horaNueva,minutoNuevo]
}