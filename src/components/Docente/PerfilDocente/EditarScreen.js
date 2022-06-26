import React, { useContext,useEffect,useState } from 'react'
import { EditarPerfil } from './EditarPerfil';
export const EditarScreen=()=>  {
 
var us=JSON.parse(localStorage.getItem('datos'));
    return (
        <>
      <div>
        <div>
        </div>
        <EditarPerfil nom={us.nombreUsuario} ape={us.apellidoUsuario}
         tel={us.telefonoUsuario} dir={us.direccionUsuario}
          cor={us.correoUsuario} con={us.contraseñaUsuario} conf={us.contraseñaUsuarioConf} />
      </div>
      </>

    )
  
}



