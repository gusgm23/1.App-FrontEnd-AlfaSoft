import React from 'react'

import { getHoraFin } from '../../helpers/metodosGetionSolicitudes';

export const FilaTabla = ( {data=[], fecha, hora, periodo, guardarDatos, capacidadSoli, modalReserva, datosCapacidad=[]} ) => {

    const mostrarFecha = () => {

        let horaSeparada = hora[0] + hora[1];
        let minutosSeparados = hora[3] + hora[4];
        let periodoSeparado = periodo[0]
        console.log(horaSeparada, minutosSeparados)
        let horaFin = getHoraFin(horaSeparada,minutosSeparados, periodoSeparado)
        
        return horaFin
    }

    const reducirCapacidad = ( capacidadAula, id ) => {

        const reserva = {
            horaIni: hora,
            horaFin: mostrarFecha(),
            fechaReserv: fecha,
            idAula: id
        }

        const lista = datosCapacidad.listaReservas;
        lista.push(reserva);

        guardarDatos({
            capacidadSoliRescatado: capacidadSoli,
            capacidadAulaRescatado: capacidadAula,
            listaReservas: lista
        })
        modalReserva();

    }

    return (
        <>
            {
                data.map((elem, i) => (
                    <tr key={elem.id} className='animate__animated animate__fadeIn'>
                        <td>{ i+1 }</td>
                        <td>{ elem.nombreAula }</td>
                        <td>{ elem.capacidadAula }</td>
                        <td>{ elem.estadoAula }</td>
                        <td>
                            <button 
                                className='btn-reserva'
                                onClick={ () => ( reducirCapacidad(elem.capacidadAula, elem.id) ) }
                            
                            >
                                Reservar 
                            </button>
                        </td>
                    </tr>
                ))
            }
        </>
    )
}
