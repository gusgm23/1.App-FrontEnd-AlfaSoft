
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { buscarRol } from '../../helpers/buscarRol'
import { buscarUsuario } from '../../helpers/buscarUsuario'
import { useForm } from '../../hooks/useForm'
import { getRoles } from '../../service/apiRoles'
import { getUsuarios, getUsuariosHabilitados } from '../../service/apiUsuarios'
import { types } from '../../types/types'

import './estilos-login.css'

export const LoginScreen = () => {
    
    const [formValues, handleInputChange, reset] = useForm({
        email:'',
        pass: ''
    })

    const [dataUsers, setDataUsers] = useState({
        state: false,
        data: []
    })

    const [errorLogin, setErrorLogin] = useState(false)
    const [respuesta, setRespuesta] = useState({
        state: false,
        dataRol:[]
    });

    const { data } = dataUsers
    const { email, pass } = formValues;
    const { dataRol } = respuesta;

    //!login
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    //!Hook para indicar a un urs que ha sido bloqueado
    const [usuarioBloqueado, setUsuarioBloqueado] = useState(false);

    useEffect(() => {
        
        setUsuarioBloqueado(false);

    }, [email, pass])
    

    useEffect(() => {
        
        getUsuarios(setDataUsers); 
        getRoles(setRespuesta);

    }, [])

    const handleLogin = () => {
        
        const validar = buscarUsuario(data, email, pass);
        const {resp,userReg} = validar;
    
        const {rolEncontrado} = buscarRol(dataRol, userReg.rol_id);
        
        

        if(validar.resp){

            setErrorLogin(false);
            if(userReg.estadoUsuario === 'Habilitado'){
                redirigirUsr( userReg, rolEncontrado );
            }else{
                setUsuarioBloqueado(true);
            }
            
            
        }else {
            setErrorLogin(true);
        }

    }

    const redirigirUsr = (userReg, rolObtenido) => {

        let ruta = '';

        const action = {
            type: types.login,
            payload: {
                name: userReg.name,
                apellido: userReg.apellido,
                rol: rolObtenido.rol, 
                idDocente: userReg.id,
            }
        }

        dispatch(action);

        if(rolObtenido.rol === 'Administrador'){
            ruta = '/admin/adminhome'
        }else{
            ruta = '/docente/home'
        }

        const lastPath = localStorage.getItem('lastPath') || ruta;

        navigate(ruta, {
            replace: true
        })

    }
    
    return (
        <div className='container-flex-login'>
            <div className='container-elements-login animate__animated animate__fadeIn'>
                <h2 className='title-login'>Iniciar Sesión</h2>
                <div className='container-inputs-login'>
                    <label className='label-login element-login'>Correo Institucional:</label>
                    <input 
                        name='email'
                        type='email'
                        placeholder='202002834@fcyt.umss.edu.bo'
                        className='element-login'
                        value={ email }
                        onChange={ handleInputChange }
                    />
                    <label className='label-login element-login'>Contraseña:</label>
                    <input 
                        name='pass'
                        type='password'
                        placeholder='***********'
                        className='element-login'
                        autoComplete='off'
                        value={ pass }
                        onChange={ handleInputChange }
                    />
                    <p className={ errorLogin === true ? 'error-login-activo' : 'error-login-inhabilitado' }>
                        El Correo o contraseña ingresado no es correcto, porfavor intenta otra vez
                    </p>
                    <p className={ usuarioBloqueado === true ? 'error-login-activo' : 'error-login-inhabilitado' }>
                        Su cuenta ha sido eliminada por el administrador, no puede acceder a la plataforma.
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
