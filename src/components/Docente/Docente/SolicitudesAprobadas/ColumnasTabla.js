import React from 'react'

export const ColumnasTabla = ({columnas=[]}) => {
    return (
        <>
            <thead>
                <tr className="titulo-tabla-solicitudes">
                    {
                        columnas.map((element, i) => (
                            <th key={i}>{element}</th>
                        ))
                    }
                </tr>
            </thead>
        </>
    )
}
