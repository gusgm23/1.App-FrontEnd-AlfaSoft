import React from 'react'

export const FilaTabla = ( {data=[]} ) => {
    return (
        <>
            {
                data.map((elem, i) => (
                    <tr key={elem.id}>
                        <td>{ i+1 }</td>
                        <td>{ elem.nombreAula }</td>
                        <td>{ elem.capacidadAula }</td>
                        <td>{ elem.estadoAula }</td>
                        <td>
                            <button className='btn-reserva'> Reservar </button>
                        </td>
                    </tr>
                ))
            }
        </>
    )
}
