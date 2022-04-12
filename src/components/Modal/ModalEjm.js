import React, { useState } from 'react'
import './modal.css'

export const ModalEjm = ({isOpen, closeModal, aula, capacidad}) => {
    
    const handleModalContainerClick = e => e.stopPropagation();
    
    const [value, setValue] = useState(aula);

    const [valorCapacidad, setvalorCapacidad] = useState(capacidad);

    const onChangeAula = (event) => {

        setValue(event.currentTarget.value);

    }

    const onChangeCapacidad = (event) => {

        setvalorCapacidad(event.currentTarget.value);

    }

    const actualizarDatos = () => {
        const seleccion = document.getElementById('estados');
        
        const datos = {
            aula: value,
            cap: valorCapacidad,
            estado: seleccion.options[seleccion.selectedIndex].value
        }

        console.log(datos.aula, datos.cap, datos.estado);
    }

    return (
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className='modal-container' onClick={handleModalContainerClick}>
                <button className='modal-close' onClick={closeModal}>Cerrar</button>
                <div className='contenedor-edicion-aula'>
                    <h2 className='titulo-registro-aula'>Edición de Aulas</h2>
                    <form>
                        <div className='contenedor-general'>
                            <div className='contenedor-elementos'>
                                <div className='contenedor-aula contenedor-flex'>
                                    <label className='labels'>Aula:</label>
                                    <input 
                                        className='inputs' 
                                        type='text' 
                                        value={value}
                                        onChange={onChangeAula}
                                    />
                                </div>
                                <div className='contenedor-flex'>
                                    <label className='labels'>Capacidad:</label>
                                    <input 
                                        className='inputs' 
                                        type='number'
                                        value={valorCapacidad}
                                        onChange={onChangeCapacidad}
                                    />
                                </div>
                                <div className='contenedor-flex'>
                                    <label className='labels'>Estado:</label>
                                    <select id='estados' className='inputs'>
                                        <option value='' select='selected'>Estado</option>
                                        <option value='libre' >Libre</option>
                                        <option value='deshabilitado' >Deshabilitado</option>
                                    </select>
                                </div>
                            </div>
                            <div className='contenedor-botones'>
                                <button 
                                    type='button' 
                                    className='btn btn-warning'
                                    onClick={closeModal}
                                >
                                    Cancelar
                                </button>
                                <button 
                                    type='button' 
                                    className='btn btn-primary'
                                    onClick={actualizarDatos}
                                >
                                    Confirmar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </article>
    )
}
