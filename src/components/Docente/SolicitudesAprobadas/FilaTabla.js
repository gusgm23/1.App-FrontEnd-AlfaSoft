import React from 'react'

export const FilaTabla = ({showReservedClassroom,listaSoliAprob=[]}) => {
    
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
                                onClick={()=>{ showReservedClassroom(item)} }
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
