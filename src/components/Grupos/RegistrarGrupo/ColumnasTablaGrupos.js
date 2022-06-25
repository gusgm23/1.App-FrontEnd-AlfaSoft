import React from 'react'

const titulosColumnas = ['#', 'Grupo', 'Estado', 'Docente', 'Auxiliar', 'Opciones']

export const ColumnasTablaGrupos = () => {
    return (
        <thead>
            <tr className='titulo-tabla'>
                {
                    titulosColumnas.map( titulo => (
                        <th>{ titulo }</th>
                    ) )
                }
            </tr>
        </thead>
    )
}
