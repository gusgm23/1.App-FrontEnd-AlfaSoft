import React from 'react'
import { useState } from "react";
import './estilosFormularioReserva.css'


export const GruposDocente = ({ datas = [], selectsGrupos, setSelectsGrupos  }) => {

  const [values ] = useState({
    grupoMateria: '',
    id: ''

  });


  return (
      <select  
        name='grupoSolicitud'
        className="inputsSolicitud"
        placeholder="Elegir Materia.´"
        value={selectsGrupos} 
        onChange={ e => setSelectsGrupos(e.target.value)}
      > 
      <option>Seleccionar grupo.</option>
      {
       datas.map((grupo) => (       
          <option key={grupo.id} value={grupo.grupoMateria}>{ grupo.grupoMateria}</option> ))}
      </select>
      
    )
}
