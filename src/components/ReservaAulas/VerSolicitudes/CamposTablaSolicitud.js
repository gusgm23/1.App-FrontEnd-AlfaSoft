import React from "react";

const CamposTablaSolicitud = () => {
    const columnas = ['#', 'Nombre', 'Apellido', 'Materia', 'Cantidad', 'Motivo', 'Fecha', 'Hora', 'Opciones']

    return (
        <>
            <thead>
                <tr className="titulo-tabla-solicitudes">
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

export default CamposTablaSolicitud