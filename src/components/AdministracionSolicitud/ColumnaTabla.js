import React from 'react'

export const ColumnaTabla = ({ listaTitulos=[] }) => {
    return (
        <thead>
            <tr className='titulo-tabla'>
                {
                    listaTitulos.map( (titulo, i) => (
                        <th key={i}> {titulo} </th>
                    ) )
                }
            </tr>
        </thead>
    )
}
