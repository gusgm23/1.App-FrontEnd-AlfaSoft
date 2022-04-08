import React from 'react'

import './estilosRegistroAula.css'

export const RegistroAulasScreen = () => {
    
    const handleClick = () => {
        const seleccion = document.getElementById('estados');
        console.log(seleccion.options[seleccion.selectedIndex].value);
    }

    const handleCancel = () => {
        console.log('cancelar')
    }
    
    return (
        <div className='contenedor-registro-aula'>
            <h2 className='titulo-registro-aula'>Registro de Aulas</h2>
            <form>
                <div className='contenedor-general'>
                    <div className='contenedor-elementos'>
                        <div className='contenedor-aula contenedor-flex'>
                            <label className='labels'>Aula:</label>
                            <input className='inputs' type='text'/>
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Capacidad:</label>
                            <input className='inputs' type='number'/>
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Estado:</label>
                            <select id='estados' className='inputs'>
                                <option value='' selected='selected'>Estado</option>
                                <option value='libre' >Libre</option>
                                <option value='deshabilitado' >Deshabilitado</option>
                            </select>
                        </div>
                    </div>
                    <div className='contenedor-botones'>
                        <button 
                            type='button' 
                            className='btn btn-warning'
                            onClick={handleCancel}
                        >
                            Cancelar
                        </button>
                        <button 
                            type='button' 
                            className='btn btn-primary'
                            onClick={handleClick}
                        >
                            Confirmar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
