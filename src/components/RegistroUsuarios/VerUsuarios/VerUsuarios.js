import React, { useEffect, useMemo, useState } from "react";
import './verUsuarios.css';


import { getUsuariosHabilitados } from '../../../service/apiUsuarios';
import Spinner from "../../Spinner/Spinner";
import { Usuarios } from './Usuarios';
import { useModal } from "../../../hooks/useModal";
import { ModalGenerico } from "../../Modal/ModalGenerico";
import { RegistroUsuarios } from '../RegistroUsuarios';
import { useNavigate } from "react-router-dom";


export const VerUsuarios = () => {

    const navigate = useNavigate();

    const [ isOpenModalCreate, openModalCreate, closeModalCreate ] = useModal(false);
    const [datos, setDatos] = useState([]);


    const [ ListaUsuariosHabilitados, setListaUsuariosHabilitados ] = useState({
        states: false,
        datas: []
    });

    const { states, datas } = ListaUsuariosHabilitados;

    useEffect(() => {
        getUsuariosHabilitados(setListaUsuariosHabilitados);
    }, [states]);

    const redireccionar = () => {
        
        navigate('/admin/verusrssnmat');

    }

    return (
        <div className="contenedor-general-verusuarios">
            <div className="contendedor-elementos-verusuarios">
                <div className="contenedor-titulo-boton">
                    <h2 className="titulo-ver-usuarios"> Usuarios Registrados: {datas.length} </h2>
                    <button 
                        className="btn-usuarios-sin-materias"
                        onClick={redireccionar}
                    >
                        Ver usuarios sin materias
                    </button>
                </div>
                <hr/>
                {
                    states ?
                    <Usuarios data={ datas } setListaUsuariosHabilitados={ setListaUsuariosHabilitados } />
                    : <Spinner/>
                }
            </div>

        </div>
    )

}