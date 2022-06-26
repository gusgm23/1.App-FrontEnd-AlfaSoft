import React from 'react'
import './estilosFormularioReserva.css'


export const GruposDocente = ({ datas = [], selectsGrupos, setSelectsGrupos  }) => {


  return (
      <select  
        name='grupoSolicitud'
        className="inputsSolicitud"
        value={selectsGrupos} 
        onChange={ e => setSelectsGrupos(e.target.value)}
      > 
      <option value='GrupoVacio'>Seleccionar grupo.</option>
      {
       datas.map((grupo, index) => (       
          <option key={index} value={grupo.grupoMateria}>{ grupo.grupoMateria}</option> ))}
      </select>
      
    )
}
