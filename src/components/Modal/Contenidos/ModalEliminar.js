import React from 'react';
import confirmacionImg from "../../../images/preg.svg";
import { ModificarUsuario } from '../../../service/apiUsuarios';
import './modalEliminar.css';

export const ModalEliminar = ({cerrarModal, eliminarUsuario}) => {



  return (
    <div className='modalEliminarUusarios'>
      <div className='modalContenedorUsuario'>
        <div className='AdvertenciaEliminarUsuario'>
          <h1>¡Advertencia!</h1>
        </div>
        <div className='tituloEliminarUsuario'>
            <h2>¿Estas seguro de eliminar el usuario?</h2>
        </div>
        <div className='cuerpoEliminarUsuario'>
            <img src={confirmacionImg} className="img-advertencia" alt="alert" />
        </div>
        <div className='botonesEliminarUsuario'>
            <button className='btnModalCancelar' onClick={cerrarModal}>Cancelar</button>
            <button className='btnModalAceptar' onClick={() => {eliminarUsuario()}}>Si</button>
        </div>
      </div>
    </div>
  )
}


