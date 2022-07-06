import React from 'react'
import { obtenerReservasDeUsuario } from '../../../helpers/obtenciondeReservas'

export const FilaTabla = ({listaSoliAprob=[], setListaReservas, listaReservas=[], listaAulas=[], showModal=()=>{}}) => {
    
    const guardarDatos = (item) => {
        const listaReservasSoli = obtenerReservasDeUsuario(listaReservas, item, listaAulas);
        
        setListaReservas(listaReservasSoli);

        showModal();

    }

    return (
        <tbody>
            {
                listaSoliAprob.map((item, i) => (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{ item.motivoSolicitud }</td>
                        <td>{ item.materiaSolicitud }</td>
                        <td>{ item.fechaSolicitud }</td>
                        <td>{ item.horaInicioSolicitud }</td>
                        <td>{ item.estadoSolicitud }</td>
                        <td>
                            <button
                                className='btn-ver-aulas-reservadas'
                                onClick={()=>{ guardarDatos( item ) } }
                            >
                                <i className="bi bi-eye-fill icon-ver-aulas-reserv"></i>
                            </button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    )
}
