import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { obtenerUsuariosSinMaterias } from '../../../helpers/usuariosSinMaterias';
import { getGrupoMateria } from '../../../service/apiGrupoMaterias';
import { getUsuariosHabilitados } from '../../../service/apiUsuarios';
import Spinner from '../../Spinner/Spinner';
import { ColumnaTabla } from './ColumnaTabla';

import './estilos-usuarios-sin-aula.css'
import { FilaTabla } from './FilaTabla';

export const UsuariosSinMateria = () => {
    
    const navigate = useNavigate();

    const [listaUsuarios, setListaUsuarios] = useState({
        states:false,
        datas: []
    })

    const { states, datas } = listaUsuarios;
    
    const [listaGrupos, setListaGrupos] = useState([]);
    const [usrsSinMaterias, setUsrsSinMaterias] = useState([])
    
    useEffect(() => {
        
        getUsuariosHabilitados(setListaUsuarios);
        getGrupoMateria(setListaGrupos);
        
    }, [])

    useEffect(() => {
        
        setUsrsSinMaterias(obtenerUsuariosSinMaterias( listaGrupos.data, datas));
                
    }, [datas, listaGrupos])

    const volverAtras = () => {

        navigate(-1);

    }

    return (
        <div
            className='contenedor-gral-usrs-sin-mat'
        >
            <section className='seccion-usrs-sin-mat'>
                <div className='cont-componentes-usrs-sin-mat'>
                    <div className='contenedor-titulo-usr-sin-mat'>
                        <h2>Usuarios sin materia asignada: {usrsSinMaterias.length}</h2>
                        <button
                            className='btn-volver-atras-usrs-sin-mat'
                            onClick={volverAtras}
                        >
                            <i className="bi bi-arrow-left-square-fill"></i>
                        </button>
                    </div>
                    <hr/>
                    {
                        states ? 
                            <table className='tabla-usrs-sin-mat'>
                                <ColumnaTabla />
                                <FilaTabla listaUsuarios={usrsSinMaterias}/>
                            </table>
                        : <Spinner />
                    }
                </div>
            </section>
        </div>
    )
}
