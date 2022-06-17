import React, { useContext } from 'react'
import "./editarperfilestilos.css";
import { getUsuarios } from '../../../service/apiUsuarios'
import { AuthContext } from '../../../auth/authContext';
export const EditarPerfil = () => {

  const{user}= useContext (AuthContext);

    return (
      <div className='form-container'>
        <h1>
        Editar Perfil
        </h1>
        <form>

        <div className='inputs-container'>
        <div className='item-container'>
			<div>
                 <label>Nombre(s):</label>
                 <div className='input'>
                <input placeholder='nombre' className='inputs' type="text"></input>
                 </div>
			</div>
			<div className='rigth-item'>
			   <label>Apellido(s):</label>
                <div className='input'>
                  <input placeholder='apellido' className='inputs' type="text"></input>
                </div>
			</div>
        </div>

		<div className='item-container'>

            <div className='phonenumber'>
            <label>Celular:</label>
            <div className='input'>
            <input placeholder='77777777' className='inputs' ></input>
            </div>
            </div>

            <div className='rigth-item'>
            <label>Direccion:</label>
            <div className='input'>
            <input placeholder='Av.Panamericana' className='inputs' type="text"></input>
            </div>
            </div>
	    </div>
		

            <div className='correo'>
            <label>Correo electronico:</label>
            <div className='input'>
            <input placeholder='alfasoft@gmail.com' className='input-email'></input>
            </div>
            </div>
            
			<div className='item-container'>

            <div className='password'>
            <label>Contraseña:</label>
            <div className='input'>
            <input placeholder='********' className='inputs'></input>
            </div>
            </div>

            <div className='rigth-item'>
            <label>Confirmar Contraseña:</label>
			<div className='input'>
            <input placeholder='********' className='inputs'></input>
             </div>
            </div>
			</div>

        <div className='contenedor-botones'>
          <div>
            <button
             id='btn-opciones-soli'
             className='btn-guardar'
             onClick={console.log(user)}
            >
              Guardar</button>
          </div>
          <div>
            <button
            id='btn-opciones-soli'
            className='btn-rechazar'
            >
              Cancelar</button>
          </div>

        </div>
  
        </div>

        </form>
      </div>
    )
  
}

