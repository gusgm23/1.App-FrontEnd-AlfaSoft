import React from 'react'

export const ListaAuxiliares = ({ listaAuxiliares=[], selects, setSelects }) => {
    const listaOrdenada = listaAuxiliares.sort((a, b) => {
        if ( a.name < b.name )
            return -1;
        if ( a.name > b.name )
            return 1;
        return 0;
    });
    
    return (
        <>
            <select
                className="inputs"
                value={ selects }
                onChange={ e => setSelects(e.target.value) }
            >
                <option value='No asignado'>No asignado</option>
                {
                    listaOrdenada.map(auxiliar => (
                        auxiliar.rol_id != 1
                        ? <option key={ auxiliar.id } value={ auxiliar.id }> { auxiliar.name } { auxiliar.apellido }</option>
                        : ''
                    ))
                }
            </select>
        </>
    )
}
