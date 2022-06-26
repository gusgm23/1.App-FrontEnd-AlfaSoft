import React from 'react'

const CamposTabla = () => {
  
    const columnas = ['#', 'Nombre', 'Apellido', 'Cargo', 'Telefono', 'Direccion', 'Email', 'Opciones']

    return (
    <>
        <thead>
            <tr className="titulo-tabla-usuarios">
                {
                    columnas.map((element) => (
                        <th>{element}</th>
                    ))
                }
            </tr>
        </thead>
    </>
  )
}

export default CamposTabla
