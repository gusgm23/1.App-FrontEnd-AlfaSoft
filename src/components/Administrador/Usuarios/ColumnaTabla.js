import React from 'react'

const listaTitulos = ['#', 'Nombre', 'Apellido', 'Cargo', 'Opciones'];

export const ColumnaTabla = () => {
    return(
        <thead>
            <tr className='titulo-tabla'>
                {
                    listaTitulos.map( (titulo, i) => (
                        <th key={i}>{ titulo }</th>
                    ) )
                }
            </tr>
        </thead>
    )
    
}
