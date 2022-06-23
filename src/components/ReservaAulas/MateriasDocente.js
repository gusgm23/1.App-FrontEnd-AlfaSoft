import React from 'react'
import './estilosFormularioReserva.css'


export const MateriasDocente = ({ data = [], selects, setSelects  }) => {


  return (
      <select  
        name='materiaSolicitud'
        className="inputsSolicitud"
        value={selects} 
        onChange={ e => setSelects(e.target.value)}
      > 
      <option value='MateriaVacia'>Seleccionar materia.</option>
      {
       data.map((mat, index) => (       
          <option key={index} value={mat}>{ mat}</option> ))}
      </select>
      
    )
}
