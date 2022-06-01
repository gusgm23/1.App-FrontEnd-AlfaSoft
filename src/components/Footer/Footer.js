import React from 'react'

import './estilos-footer.css'

export const Footer = () => {
    return (
        <div className='container-footer animate__animated animate__fadeIn'>
            <h2 className='titulo-footer'>ALFASOFT</h2>
            <p className='detalle-nombre-grupo'>
                Software Development and Technical Support S.R.L.
            </p>
            <p className='detalle-lugar'>
                Cochabamba - Bolivia
            </p>
            <p className='derechos'>
                Derechos Reservados &copy;
            </p>
        </div>
    )
}
