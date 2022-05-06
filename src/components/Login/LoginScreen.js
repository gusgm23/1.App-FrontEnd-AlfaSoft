import React from 'react'
import { Link } from 'react-router-dom'

import './estilos-login.css'

export const LoginScreen = () => {
    
    const handleLogin = () => {
        
        console.log('*se deberia logear*')

    }
    
    return (
        <div className='container-flex-login'>
            <div className='container-elements-login'>
                <h2 className='title-login'>Iniciar Sesión</h2>
                <div className='container-inputs-login'>
                    <label className='label-login element-login'>Correo Institucional:</label>
                    <input 
                        type='email'
                        placeholder='202002834@fcyt.umss.edu.bo'
                        className='element-login'
                    />
                    <label className='label-login element-login'>Contraseña:</label>
                    <input 
                        type='password'
                        placeholder='***********'
                        className='element-login'
                        autoComplete='off'
                    />
                    <p className='error-login-inhabilitado'>
                        El Correo o contraseña ingresado no es correcto, porfavor intenta otra vez
                    </p>
                    <Link to='/registrousuario' className='link element-login'>¿No tienes cuenta? Registrate aqui</Link>
                </div>
                <section>
                    <button 
                        className='btn-login'
                        onClick={ handleLogin }
                    >
                        Ingresar
                    </button>
                    <Link to='/' className='link element-login'>Volver</Link>
                </section>
            </div>
        </div>
    )
}
