import React from 'react'
import { useState } from "react";
import './estilosFormularioReserva.css'



export const MateriasDocente = ({ data = [] }) => {
  const [values ] = useState({
    nombreMateria: '',
    id: ''
  });

  return (
    <select name='materiaSolicitud' 
    className="inputs"
    //type='text' 
    placeholder="Elegir Materia.´">{
     data.map((mat) => (       
         <option key={mat.id} value={mat.id}>{ mat.nombreMateria}</option> ))}
    </select>
    )
}
