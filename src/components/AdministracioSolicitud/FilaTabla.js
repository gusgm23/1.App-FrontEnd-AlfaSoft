import React, { useEffect, useState } from 'react'
import { listaAulas } from '../../data/ListaAulas';
import { listaReservas } from '../../data/ListaReservas';
import { generarAulasDisponibles } from '../../helpers/generarAulasDisponibles';
import { getHoraFin } from '../../helpers/metodosGetionSolicitudes';

export const FilaTabla = ( {data=[], fecha, hora, periodo} ) => {

    const mostrarFecha = () => {

        let horaSeparada = hora[0] + hora[1];
        let minutosSeparados = hora[3] + hora[4];
        let periodoSeparado = periodo[0]
        console.log(horaSeparada, minutosSeparados)
        let horaFin = getHoraFin(horaSeparada,minutosSeparados, periodoSeparado)
        console.log(horaFin, 'hora fin');
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
                                onClick={ mostrarFecha }
                            
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
