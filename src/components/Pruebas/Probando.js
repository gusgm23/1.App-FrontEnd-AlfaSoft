import React, { useState } from 'react'

import './estilos-pruebas.css'

const listaGrupos = ['1-Alfredo', '2-Carla', '3-lety']
const listaIDGrupos = [1,2,3]

export const Probando = () => {
    const valores = () => {
        let lista = [];
        while(lista.length < listaIDGrupos.length){
            lista.push(false);
        }

        return lista;
    }

    const [checado, setChecado] = useState(valores());
    
    
    const handleOnChange = (pos) => {
        const cambio = checado.map( (elemento, i)  => pos == i ? !elemento : elemento );

        setChecado(cambio);
    }

    return (
        <div className='cont-pruebas'>
            {
                listaGrupos.map( (grupo, i) => (
                    <>
                        <input 
                            type='checkbox' 
                            id={i}
                            name={grupo}
                            value={grupo}
                            checked={checado[i]}
                            onChange={() => handleOnChange(i)}
                        /> {grupo} 
                    </>
                ) )
            }

            <button onClick={() => console.log(checado)}> imprimir</button>
        </div>
    )
}
