import React from "react";

const CamposTablaSolicitud = () => {
    const columnas = ['#', 'Nombre', 'Cantidad de Est.', 'Motivo Solicitud', 'Fecha de Solicitud', 'Hora de Solicitud', 'Opciones']

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