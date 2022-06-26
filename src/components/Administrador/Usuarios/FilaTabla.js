import React from 'react'
import { useNavigate } from 'react-router-dom';

export const FilaTabla = ({listaUsuarios=[]}) => {

    const navigate = useNavigate();
    
    const listaOrdenada = listaUsuarios.sort((a, b) => {
        if ( a.name < b.name )
            return -1;
        if ( a.name > b.name )
            return 1;
        return 0;
    });

    const irMaterias = () => {
        navigate('/admin/vermaterias');
    }

    return (
        <tbody>
            {
                listaOrdenada.map( (usuario, i) => (
                    <tr key={i}>
                        <td>{ i + 1 }</td>
                        <td>{ usuario.name }</td>
                        <td>{ usuario.apellido }</td>
                        <td>{ usuario.cargoUsuario }</td>
                        <td className='cont-btn-asing-mat'>
                            <button
                                className='btn-link-asing-materia'
                                onClick={ () => irMaterias() }
                            >
                                <i className="bi bi-clipboard-plus-fill"></i>
                            </button>
                        </td>
                    </tr>
                ) )
            }
        </tbody>
    )
}
