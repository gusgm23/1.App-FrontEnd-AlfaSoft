import React from 'react'

export const ListaDocentes = ({listaDocentes=[], selects, setSelects}) => {
    
    const listaOrdenada = listaDocentes.sort((a, b) => {
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
                <option value='Vacio'>Elige un docente</option>
                {
                    listaOrdenada.map(docente => (
                        docente.rol_id != 1
                        ? <option key={ docente.id } value={ docente.id }> { docente.name } { docente.apellido }</option>
                        : ''
                    ))
                }
            </select>
        </>
    )
}
