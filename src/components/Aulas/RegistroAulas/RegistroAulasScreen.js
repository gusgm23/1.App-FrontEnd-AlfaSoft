import React from 'react'
import { useForm } from '../../../hooks/useForm'

import './estilosRegistroAula.css'

export const RegistroAulasScreen = () => {
    
    const [formValues, handleInputChange] = useForm({
        aula: '',
        capacidad: '',
    })

    const { aula, capacidad } = formValues;
    
    const handleClick = () => {
        const seleccion = document.getElementById('estados');
        console.log(seleccion.options[seleccion.selectedIndex].value);
        console.log(formValues, );
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
                            <input 
                                name='aula'
                                className='inputs' 
                                type='text'
                                placeholder='690A'
                                value={ aula }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Capacidad:</label>
                            <input 
                                name='capacidad'
                                className='inputs' 
                                type='number'
                                placeholder='10'
                                value={ capacidad }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Estado:</label>
                            <select id='estados' className='inputs'>
                                <option value='' defaultValue='selected'>Estado</option>
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
