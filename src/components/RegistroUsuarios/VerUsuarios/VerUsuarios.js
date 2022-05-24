import React, { useEffect, useMemo, useState } from "react";
import './verUsuarios.css';


import { getUsuariosHabilitados } from '../../../service/apiUsuarios';
import Spinner from "../../Spinner/Spinner";
import { Usuarios } from './Usuarios';
import { useModal } from "../../../hooks/useModal";
import { ModalGenerico } from "../../Modal/ModalGenerico";
import { RegistroUsuarios } from '../RegistroUsuarios';


export const VerUsuarios = () => {

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

    return (
        <div className="contenedor-general-verusuarios">
            <div className="contendedor-elementos-verusuarios">
                <div className="contenedor-titulo-boton">
                    <h2 className="titulo-ver-usuarios"> Usuarios Registrados: {datas.length} </h2>
                    {/* <div className="contenedor-botones-listarusuarios"> */}
                        {/* <button className="boton-crear-usuarios" onClick={ openModalCreate }> */}
                        {/* <i class="bi bi-plus-circle-fill"></i> */}
                        {/* </button> */}
                    {/* </div> */}
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