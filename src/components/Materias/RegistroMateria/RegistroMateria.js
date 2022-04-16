import React from 'react'
import { useForm } from '../../../hooks/useForm';

export const RegistroMateria = () => {
    const [formValues, handleInputChange] = useForm({
        codSis: '',
        materia: '',
        grupo: ''
    });

    const { codSis, materia, grupo } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues)

    }
    
    return (
        <div className='contenedor-registro-aula'>
            <h2 className='titulo-registro-aula'>Registro de Materia</h2>
            <form onSubmit={ handleSubmit }>
                <div className='contenedor-general'>
                    <div className='contenedor-elementos'>
                        <div className='contenedor-aula contenedor-flex'>
                            <label className='labels'>Código SIS:</label>
                            <input 
                                name='codSis'
                                className='inputs' 
                                type='number'
                                placeholder='201002903'
                                value={codSis}
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Materia:</label>
                            <input 
                                name='materia'
                                className='inputs' 
                                type='text'
                                placeholder='Algebra II'
                                value={ materia }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Grupo:</label>
                            <input
                                name='grupo'
                                className='inputs' 
                                type='text'
                                placeholder='6A'
                                value={ grupo }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </div>
                    <div className='contenedor-botones'>
                        <button 
                            type='button' 
                            className='btn btn-warning'
                            // onClick={handleCancel}
                        >
                            Cancelar
                        </button>
                        <button 
                            type='submit' 
                            className='btn btn-primary'
                            // onClick={handleClick}
                        >
                            Guardar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
