import React from 'react'

import imgCerrar from '../../images/Cerrar.png'

import './modal.css'

export const ModalGenerico = ({children, isOpen, closeModal}) => {
    
    const handleModalContainerClick = e => e.stopPropagation();
    
    return (
        <article className={`modal ${isOpen && "is-open"}`} onClick={ closeModal }>
            <div className='modal-container animate__animated animate__fadeIn' onClick={ handleModalContainerClick }>
                <button className='modal-close' onClick={ closeModal }><img className='img-cerrar' src={imgCerrar}/></button>
                {children}
            </div>
        </article>
    )
}
