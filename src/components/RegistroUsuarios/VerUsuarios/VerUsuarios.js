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
        state: false,
        data: []
    });

    const { state, data } = ListaUsuariosHabilitados;

    useEffect(() => {
        getUsuariosHabilitados(setListaUsuariosHabilitados);
    }, [state]);

    return (
        <div className="contenedor-general-verusuarios">
            <div className="contendedor-elementos-verusuarios">
                <div className="contenedor-titulo-boton">
                    <h2 className="titulo-ver-usuarios"> Usuarios Registrados: {data.length} </h2>
                    {/* <div className="contenedor-botones-listarusuarios"> */}
                        {/* <button className="boton-crear-usuarios" onClick={ openModalCreate }> */}
                        {/* <i class="bi bi-plus-circle-fill"></i> */}
                        {/* </button> */}
                    {/* </div> */}
                </div>
                <hr/>
                {
                    state ?
                    <Usuarios data={ data } setListaUsuariosHabilitados={ setListaUsuariosHabilitados } />
                    : <Spinner/>
                }
            </div>
            <ModalGenerico isOpen={ isOpenModalCreate } closeModal={ closeModalCreate }>
                <RegistroUsuarios
                    closeModalCreate={ closeModalCreate }
                    titulo='Registro de Nuevos'
                    datos={ datos }
                    setDatos={ setDatos }
                />
            </ModalGenerico>
        </div>
    )

}