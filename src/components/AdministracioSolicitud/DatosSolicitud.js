import React from 'react'
import { arregloDatosSolicitud } from './listaDatos'

export const DatosSolicitud = ( {item} ) => {
    
    const data = arregloDatosSolicitud( item )
    
    return (
        <>
            { 
                data.map( (elemet,i)  => (
                    <p  key={i} className='parraf-datos-soli'><b>{elemet.campo}: </b>{elemet.valor}</p>
                ) )
            }
        </>
    )
}
